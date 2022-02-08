---
template: blog-post
title: AWS Build On, ASEAN 2021
slug: /aws-build-on-asean-2021
date: 2022-02-08 11:56
description: AWS Build On ASEAN 2021, Team Dean's Arr
featuredImage: /assets/buildon.png
---
To build thriving and sustainable communities, it is important to view what are the basic needs of the people in the community. According to Maslow’s hierarchy of needs, the most crucial needs are the physiological needs and safety needs. Our team narrowed down that to allow a community to truly flourish, we must be able to fulfill the basic needs of food, water and education of the people in the community. The issue of food insecurity can be seen from Singapore Management University (SMU) Lien Centre for Social Innovation’s study in December 2019 where about one in 10 Singaporeans struggled to get sufficient, safe and nutritious food at least once in the last 12 months.

In the report on Sharing Initiatives and Sharing Landscape in Singapore published by Institute of Policy Studies in 2019, the existing barriers to successful sharing landscape in Singapore is low public awareness, cultural issues and bureaucracy across agencies. The same barriers also apply to the sharing of food, water and education in Singapore. The needy, suffering from food insecurity, often lack the knowledge of receiving aid from the right organizations and the knowledge of nutrition, worsening their already malnourished diet. 

Even though there are already many food assistance programmes in place such as Family Life-Aid by Singapore Red-Cross, The Food Bank and Food from the Heart, there are still many vulnerable groups that fell beyond the radar of these food assistance groups such as low income families that have many children. Other problems of current food assistance programmes also include duplication where agencies do not coordinate with one another to donate the appropriate amount of food per household.

Duplication also leads to several problems such as food wastage and expiration or food not being catered to the needy dietary needs. Due to the low public awareness of sharing, this also causes unsuitable food donations where the consumables are often expired or inappropriate for the needy.

\
Solution Introduction

To connect the needy, volunteers and organizations providing aid in Singapore, we propose to have a platform that has two main features: geospatial visualization and integrated agency information. 

Firstly, we will have a geospatial visualization plot of the nearest non-profit/ non-governmental organizations, charities or social enterprises, where both volunteers and the needy are able to view. Through this geospatial plot, both the volunteers and needy will be able to find an organization that they can volunteer with or seek help from. Volunteers can filter the organizations based on their neighborhood or based on the cause that they want to volunteer for. Similarly, the needy can also seek help from organizations based on their needs or their neighborhood.

Secondly, other than a geographical plot of the locations of organizations, our platform will also allow the user to view information about the organization. Information provided by our platform will differ based on the nature of the organization. For instance, if it is a food shelter, it will provide the current inventory levels, so that volunteers can choose to donate their food items to places where the inventory is low and the needy can choose to obtain food from places with higher inventory levels. For organizations that have manpower needs, our platform will be able to reflect whether or not the organization is in need of volunteers for their initiatives.

*Front-End Web Application*

![](/assets/frontend.png)

*A mockup application of our solution done with Jupyter Notebook (Python).*

![](https://lh3.googleusercontent.com/F2MlsFu5ACAV-hiJvgLXXYs7GY9MgHrhyJAJIEyHvtz98_poOms1lYHSRDUmsoybhSZ6UI1Yn1BZTEb6-FowJ4R9-hJ4wv9hUPCQyTgzwRWJHiVXRQjSYa-Ugiunng)

*Telebot Application*

![](/assets/telebot.png)

*Deep Dive into Solution*

Users on our platform would make a request based on stakeholder’s available products and inventory, which would be logged into our User Database from there it would be compiled and sent to the relevant stakeholders, they would review these requests and update their inventory before approving the request. The request would then be prompted nearest to the users based on their location.

Users = Volunteers/Needy

Stakeholders = NPOs, NGOs, Charities, Social Enterprises

Requests = Contributing or Acquiring the Products

Products = Food, Water, Education, Community Initiatives/Programmes/Projects 

Inventory = Stakeholders Available Resources 

![](https://lh5.googleusercontent.com/qYbQj-o_zfgZ-Jf1VCIpQo2Vtp5W1KOy801NcLGHMjZG0ZpL2C-ZjKuzDajnJOMLVR6Zn9cw9rXcncY1NKLjOCsyYaDQDcNJGnSUfEWuvPptd467JDk_ogE6K_CxzA)

*Architecture of Solution (Referenced from AWS Whitepapers)*

Geospatial on AWS - AWS provides support for geospatial indexing on Amazon DynamoDB datasets. Using Geo Library for Amazon DynamoDB library managing developers can manage geohash indexes, for fast and efficient execution of location-based queries over Amazon DynamoDB items representing points of interest (latitude/longitude pairs).

Data Lake - Create a centralized consolidated database amongst organizations using AWS Lake Formation. Data such as various user traffic over time can be tracked and processed, and combined together into an overall dataset. Amazon Sage-maker can be used to generate a model to predict optimal locations to visit at specific timings and will be prioritized in terms of proximity to the user. 

Database - Amazon RDS can be used to create and maintain a scalable relational database in the cloud to store real-time data of customer traffic into the various organizations by volunteers and the needy. As food has a shelf life, better inventory management and stockpiling can prevent unnecessary surplus and shortage of food resources. Predictive modeling can tap on these past data to predict high-key and low-key periods for these organizations so as to anticipate manpower and resource needs in the future.

Firstly, we will create a custom ArcGIS for Server AMI.

![](https://lh5.googleusercontent.com/pKAEKSOcGeAPj_YiEWq9Ai6wltjJSvlcKIyQnzS_KGS2cqyK40iDtpHIa0oBPaQFAiHluuyvAAYCAgbqZDXoSn-NuIbVqywiJ8A4CIFObd1lDGUHkm9hPwLzuehtSw)

Followed by Elastic Load Balancing - For high-traffic or mission-critical applications, Elastic Load Balancing (ELB) can improve fault tolerance and automatically distribute incoming application traffic evenly across multiple identically configured Amazon EC2 instances. Elastic Load Balancing can be associated with multiple instances within a single Availability Zone or across multiple Availability Zones to maintain application performance and to back up instances in case they stop working.

Amazon Cloud-Watch - provides real-time information about your deployment’s AWS cloud resource utilization, operational performance, and overall demand patterns including metrics such as CPU utilization, disk reads and writes, and network traffic. Amazon Cloud-Watch provides data about your EC2 instances, Amazon EBS volumes, and Elastic Load Balancing. You can view Amazon this data form the AWS Management Console.

Auto Scaling - If your traffic demands vary over time, Auto Scaling allows for the number of Amazon EC2 instances being used to scale up (increase) during demand spikes to maintain performance, then automatically scale down during traffic lulls to minimize costs. Auto Scaling is enabled by Amazon Cloud-Watch and is available at no additional charge beyond Amazon Cloud-Watch fees. 

Distributed ArcGIS for Server Setup - A custom ArcGIS Server AMI can be used to launch multiple instances and in conjunction with ELB can be used to coordinate the incoming traffic between those instances. Also, Auto Scaling can be engaged with Amazon Cloud-Watch to scale compute capacity to meet variations in traffic. In this type of distributed deployment, each instance containing ArcGIS Server is independent of the other instances. ELB distributes requests among the instances. If an instance is busy when it receives a request, that request will be queued within that instance and will not be passed on to any other instances that are ready to process a request.

![](https://lh4.googleusercontent.com/OONmL3N4wB3M_TWAdCbuG7LSJ-6yEuBdw5ZjaKCKUFgOTYxReuaTjimmprsJG0n3dve0rS1EKx9H4gF7WwUxZMrZ_YSOf43dZ2MTuaXUjYg4Z3HkQzFavfHalQXstg)

We would also prefer to go for an all Cloud approach as we can copy data to the cloud and then manage the data in the cloud. In this pattern the data is uploaded to Amazon S3 and then copied from Amazon S3 to an Amazon EBS volume, or directly uploaded to Amazon EBS. ArcGIS for Desktop is used to create and test the mosaic datasets and serve the data. The imagery and mosaic datasets are then synchronized with Amazon S3 to enable all data to be backed up. Snapshots can be made to create new drives and enable elasticity when needed.

![](https://lh6.googleusercontent.com/vKXfvxZy-fVY4ByMuQaJg-9_zbTiQ-Bwoiyijp8lusDMe4eVAQ6tGNpkcaG3iHWBB2XIQN8WG0gf8gfuY_p7TBRdCasUu12fnoSUprK8Bpc9Zv9wwuqPQQ-U4wfoLw)

Therefore, we believe that by utilizing AWS, we would definitely be able to create a more sustainable foundation for our solution. ESRI and Amazon Web Services offer a practical approach to running our GIS services and applications in the cloud. The Amazon cloud is an ideal environment for developing and deploying applications built on ArcGIS for Server and provides virtually unlimited computing power for intensive GIS analyses and spatial data processing.

Moving forward, by introducing our platform it would promote a more open and transparent smart city where all citizens and businesses can participate. We could tap on the existing NGOs and their data to further leverage on connecting the community together through the use of more accurate, up-to-date data. The data gathered can also be shared with government and city developers for urban development or improvements in the existing infrastructure to create a more inclusive society. Through our platform we will be able to empower our users to live independent and confident lives​. 

We are also looking to Partner with VWOs and Government Agencies to strengthen the ecosystem of support for persons with disabilities and their families​. We also wish to co-create with social enterprises leveraging assistive technologies to foster the integration of an inclusive society.