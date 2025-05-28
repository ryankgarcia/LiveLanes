# Live-Lanes

A full stack TypeScript application for car dealership owners who want to purchase preowned cars.

A different change

## Why I Built This

I built this web application because it was my responsibility in my last job to purchase
vehicles for a dealership. I enjoyed how I could properly vet a car to see if it fit into
my boss' strategy. I was in charge of communicating the available cars to my boss each week
and be sure to bid on the cars he agreed to during auction days. Often times I would lose
to other dealerships in a bidding war (each dealership tries to outbid one another) but
it always felt like a rush to win a new opportunity the following week. As I grew to understand
my dealership strategy, it always brought me joy to see the entire lifecycle of placing
winning bids on a car, to working on their repairs, and handing the final customer the keys
and getting to watch them take a car home.

## Technologies Used

- React.js
- Node.js
- CSS3
- TypeScript
- PostgreSQL
- Express

## Live Demo

Try the application live at [http://ec2-3-12-119-53.us-east-2.compute.amazonaws.com/]

## Features

- Users can view all of the listed cars and filter them by: make, model, year
- Users can create a favorites Watchlist for the cars they are interested in
- Users can submit a bid for a vehicle during a 'Live Auction'
- Users can remove vehicles from their Watchlist (favorites)

## Preview

### Live Auction Preview

![Live Auction Preview](client/src/assets/liveauction-preview.gif)

### Run List Preview

![Run List Preview](client/src/assets/runlist-preview.gif)

## Project Assistance

LearningFuze provided configuration files and server middleware code in files client-error.ts
and error-middleware.ts (for error handling). All other code was written by me.

### Stretch Features

- Implement a selling page to allow seller's of vehicles to upload vehicles to the platform and
  sell their cars on the platform
- Implement the My Purchases page to account for all of the vehicles a user 'wins' bids on allowing
  the user to follow through with the purchase of a vehicle through payment
- Implement user management allowing users to sign up for the platform and use their account to view
  their purchases

## Development

### System Requirements

- Node.js 18.18 or higher
- NPM 10 or higher
- PostgreSQL 14 or higher

### Getting Started

1. Clone repository.

git clone git@github.com:ryankgarcia/LiveLanes.git
cd LiveLanes

1. Install all dependencies with NPM.

npm install

1. Import the starting database to PostgreSQL.

createdb LiveLanes
npm run db:import

1. Start the project.

npm run dev
