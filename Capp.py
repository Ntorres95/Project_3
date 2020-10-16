import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
import datetime as dt
from flask import Flask, render_template, redirect

# Database Setup
DATABASE_URI = 'postgresql://postgres:postgres@localhost:5432/airbnb'

# create an engine using the connection string
engine = create_engine(DATABASE_URI)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
Listing = Base.classes.listings
Review = Base.classes.reviews

# Flask Setup
app = Flask(__name__)

# Flask Routes
@app.route("/")
def home():
    return render_template('map.html')

@app.route("/listing")
def getAllListings():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # results is a list of tuples
    results = session.query(Listing).all()
    session.close()
    listings = []
    for row in results:
        listing = {}
        listing['index'] = row.index
        listing['id'] = row.id
        listing['listing_url'] = row.listing_url
        listing['name'] = row.name
        listing['price_y'] = row.price
        listing['number_of_reviews'] = row.number_of_reviews
        listing['review_scores_rating'] = row.review_scores_rating
        listing['date'] = row.date
        listing['available'] = row.available
        listing['neighbourhood'] = row.neighbourhood
        listing['latitude'] = row.latitude
        listing['longitude'] = row.longitude
        listing['propert_type'] = row.property_type
        listing['bedrooms'] = row.bedrooms
        listing['beds'] = row.beds
        listings.append(listing)

    return jsonify(listings)

@app.route("/comparisons")

    