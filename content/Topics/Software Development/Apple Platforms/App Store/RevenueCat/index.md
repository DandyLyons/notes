---
publish: true
title: RevenueCat
aliases:
  - RevenueCat
docs: https://www.revenuecat.com/docs/welcome/overview
---
RevenueCat is a third-party solutions provider designed to make it easier for apps to generate revenue. 
- In their own words: [What is RevenueCat?](https://www.revenuecat.com/blog/growth/what-is-revenuecat/) 

## Why use RevenueCat
- [[StoreKit 2|StoreKit]] vs RevenueCat
	- [Implementing In-App Purchases: StoreKit vs RevenueCat - YouTube](https://www.youtube.com/watch?v=0iRui9ffor0): This 2021 video compares RevenueCat vs. Apple's built-in solution

## Getting Started 
- [SDK Quickstart | In-App Subscriptions Made Easy – RevenueCat](https://www.revenuecat.com/docs/getting-started/quickstart)
### Tutorials
- [Backend driven paywalls ](https://www.youtube.com/watch?v=du6cQeEseXw) YouTube Charlie Chapman 
- [Building a backend-driven paywall with RevenueCat – Donny Wals](https://www.donnywals.com/building-a-backend-driven-paywall-with-revenuecat/)

## Docs
- DocC: [Documentation](https://revenuecat.github.io/purchases-ios-docs/4.31.3/documentation/revenuecat) 
- [Overview | In-App Subscriptions Made Easy – RevenueCat](https://www.revenuecat.com/docs/welcome/overview)
	- [[Checking Subscription Status in RevenueCat]]
	- [[Displaying Products in RevenueCat]]

## 🙀 Gotchas
- [Quote from “App Subscription Launch Checklist | In-App Subscriptions Made Easy – RevenueCat”](https://arc.net/l/quote/khnfnbrf)
	- >If you're setting your own App User Id, any active subscriptions should be automatically restored when you log-in.\nIf you're using RevenueCat generated App User IDs on iOS, you won't be able to restore purchases after an uninstall ==in sandbox== until you make another purchase.