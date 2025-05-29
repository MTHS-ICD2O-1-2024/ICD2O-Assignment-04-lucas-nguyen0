// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

const TAX_RATE = 0.13

// Constants for size prices
const REGULAR_PRICE = 3.0
const LARGE_PRICE = 5.0

// Constants for chocolate prices
const FIRE_PRICE = 0
const NEW_YORK_PRICE = 1
const CUSTOM_PRICE = 3

/**
 * This function calculates the cost of the order.
 */
function enterClicked() {

  // Get the values of the checked radio buttons
  const sizeOfHat = document.querySelector('input[name="size-of-hat"]:checked').value
  const typeOfDesign = document.querySelector('input[name="design"]:checked').value

  // Price variables
  let costOfHat = 0
  let costOfDesign = 0

  // Processes
  if (sizeOfHat === "regular") {
    costOfHat = REGULAR_PRICE
  } else {
    costOfHat = LARGE_PRICE
  }

  if (typeOfDesign === "fire") {
    costOfDesign = FIRE_PRICE
  } else if (typeOfDesign === "new-york") {
    costOfDesign = NEW_YORK_PRICE
  } else {
    costOfDesign = CUSTOM_PRICE
  }

    // Calculate the total cost and display
    const subtotalCost = costOfHat + costOfDesign
    const amountTaxed = subtotalCost * TAX_RATE
    const totalCost = subtotalCost + amountTaxed
  document.getElementById("answer").innerHTML =
  "A " + sizeOfHat + " " + typeOfDesign + " hat." + "</br>"
  + "Total: $" + totalCost.toFixed(2) + "</br>"
  + "Tax: $" + amountTaxed.toFixed(2) + "</br>"
  + "Subtotal: $" + subtotalCost.toFixed(2)
}