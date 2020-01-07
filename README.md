# THEORB

This project is split into #Frontend and #Backend. The #Frontend collects
the who, what, when, where, why and how. #Backend records data collected from frontend on multple cloud platforms.

<--Database-->
Public 
Private
----

<--Public-->
Timestamp
ORB Transaction#
ORB Transaction Hash
----

<--Private-->
User
ORB
----

<--User-->
Cloud Service
Local Storage
----

<--ORB-->
Saved to -->
Google
    Cloud Spanner
    Cloud Memcache
    Cloud Build
    Cloud Run on GKE
Apple*
Microsoft*
----

*More information coming soon 1/7/20

#Frontend
Collect information via form and metadata -->
Who? - Login and/or Proof of Identity
What? - Product and/or Service 
When? - Timestamp 
Where? - Collect location information 
Why? - Memo 
How? - Payment Method
-->

<--Login-->
----

<--Proof of Identity-->
----

<--Products-->
ORB Shop
----

<--Services-->
ORB Send Money
ORB Recieve Money
ORB Bill Payment
ORB Debt Payment
ORB Insurance Payment
ORB Real Estate
ORB Paper Assets
ORB Tangible Assets
----

<--Timestamp-->
----

<--Location-->
----

<--Memo-->
----

<--Payment Method-->
debit
credit
wire transfer
cash
----

Each of the Products and Services provided are counted three times -->
Quote#
Invoice#
Reciept# 
-->

<--Quote-->
Click from Product or Service -->
Quote#
Login and/or Proof of Identity
Product or Service requested
Timestamp
Location
--> Saved to Local Storage -->
--> Made available to Invoice -->

<--Invoice-->
Click from Quote -->
Invoice# 
Login and/or Proof of Identity 
Product(s) or Service requested 
Timestamp 
Location
--> Saved to Local Storage -->
Option to add Memo -->
Payment Method Options -->
--> Request sent to #Backend or Receipt -->

#Backend
<--Receipt-->
Click from Invoice -->
Get Invoice data collected
Receipt#
Get ORB Transaction#
--> Hash -->
Invoice data collected 
Receipt#
ORB Transaction#
--> Save/log to Database-->
Invoice data collected 
Receipt#
ORB Transaction#
ORB Transaction Hash
----