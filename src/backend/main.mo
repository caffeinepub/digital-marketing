import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type FormEntry = {
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    message : Text;
    timestamp : Int;
  };

  module FormEntry {
    public func compare(entry1 : FormEntry, entry2 : FormEntry) : Order.Order {
      Int.compare(entry1.timestamp, entry2.timestamp);
    };
  };

  let entries = Map.empty<Text, FormEntry>();

  public shared ({ caller }) func submitEntry(name : Text, email : Text, phone : Text, service : Text, message : Text) : async () {
    let timestamp = Time.now();

    let entry : FormEntry = {
      name;
      email;
      phone;
      service;
      message;
      timestamp;
    };

    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("Name, email, and message cannot be empty");
    };

    let id = timestamp.toText() # name;
    entries.add(id, entry);
  };

  public query ({ caller }) func getAllEntries() : async [FormEntry] {
    entries.values().toArray().reverse();
  };
};
