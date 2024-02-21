import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [activeFriend, setActiveFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleActiveFriend(selectedFriend) {
    setActiveFriend((friend) =>
      friend?.id === selectedFriend.id ? null : selectedFriend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(amount) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === activeFriend.id
          ? { ...friend, balance: friend.balance + amount }
          : friend
      )
    );
    setActiveFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleActiveFriend}
          activeFriend={activeFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {activeFriend && (
        <FormSplitBill
          friend={activeFriend}
          onSplitBill={handleSplitBill}
          key={activeFriend.id}
        />
      )}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FriendsList({ friends, onSelect, activeFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          activeFriend={activeFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect, activeFriend }) {
  const isActive = activeFriend?.id === friend.id;

  return (
    <li className={isActive ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}.
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      <Button onClick={() => onSelect(friend)}>
        {isActive ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🦹🏼‍♂️ Friend name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🎇 Image URL:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  let friendExpense =
    bill !== "" && yourExpense !== "" ? +bill - +yourExpense : "";
  const [paying, setPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !yourExpense) return;
    onSplitBill(paying === "user" ? friendExpense : -yourExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>🧾 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>💵 Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(+e.target.value > bill ? yourExpense : +e.target.value)
        }
      />

      <label>🦹🏼‍♂️ {friend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill</label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
