// Simple Hotel Reservation System using Classes in JavaScript

class Hotel {
    static totalHotels = 0; // Static property to track total hotels
  
    constructor(name, location) {
      this.name = name;
      this.location = location;
      this.rooms = [];
      Hotel.totalHotels++;
    }
  
    static getTotalHotels() {
      // Static method to get the total number of hotels
      return `Total Hotels: ${Hotel.totalHotels}`;
    }
  
    addRoom(roomNumber, type, price) {
      const room = { roomNumber, type, price, isAvailable: true };
      this.rooms.push(room);
    }
  
    listAvailableRooms() {
      const availableRooms = this.rooms.filter(r => r.isAvailable);
      console.log("Available Rooms:");
      availableRooms.forEach(room => {
        console.log(`Room ${room.roomNumber}: ${room.type} - $${room.price}`);
      });
      if (availableRooms.length === 0) console.log("No rooms available.");
    }
  }
  
  class Reservation {
    static totalReservations = 0; // Static property to track total reservations
  
    constructor(hotel, customerName, roomNumber) {
      this.hotel = hotel;
      this.customerName = customerName;
      this.roomNumber = roomNumber;
      Reservation.totalReservations++;
    }
  
    static getTotalReservations() {
      // Static method to get the total number of reservations
      return `Total Reservations: ${Reservation.totalReservations}`;
    }
  
    confirmReservation() {
      const room = this.hotel.rooms.find(r => r.roomNumber === this.roomNumber);
      if (room && room.isAvailable) {
        room.isAvailable = false;
        console.log(`Reservation confirmed for ${this.customerName} in room ${this.roomNumber}.`);
      } else {
        console.log(`Room ${this.roomNumber} is not available for reservation.`);
      }
    }
  }
  
  // Example usage:
  const hotel1 = new Hotel("Sunrise Hotel", "Downtown");

  //adding rooms
  hotel1.addRoom(101, "Single", 100);
  hotel1.addRoom(102, "Double", 150);
  hotel1.addRoom(103, "Suite", 300);
  
  const hotel2 = new Hotel("Oceanview Resort", "Seaside");

  //adding rooms
  hotel2.addRoom(201, "Single", 120);
  hotel2.addRoom(202, "Double", 180);
  
  console.log(Hotel.getTotalHotels());
  hotel1.listAvailableRooms();
  
  const reservation1 = new Reservation(hotel1, "Alice", 101);
  reservation1.confirmReservation();// making reservations
  const reservation2 = new Reservation(hotel1, "Bob", 102);
  reservation2.confirmReservation();// making reservations
  
  console.log(Reservation.getTotalReservations());
  hotel1.listAvailableRooms();
  