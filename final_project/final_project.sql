-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2021 at 12:25 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_num` int(11) NOT NULL,
  `project_name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_num`, `project_name`) VALUES
(1, 'GM Website'),
(2, 'Corporate Intranet'),
(3, 'Corporate Website'),
(4, 'Lakeside Mall Website'),
(5, 'Deli Website'),
(6, 'Hardware Store Website'),
(7, 'Pharmacy Website'),
(8, 'Bakery Website');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `task_num` int(11) NOT NULL,
  `project_num` int(11) NOT NULL,
  `Description` text NOT NULL,
  `Status` enum('In Process','Resolved','Unassigned') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`task_num`, `project_num`, `Description`, `Status`) VALUES
(1, 1, 'Develop new flash piece for new vehicle reveal.', 'Unassigned'),
(2, 1, 'Acquire vechicle specs for new model year vehicles.', 'Resolved'),
(3, 1, 'Client has requested a new Contact Us Form.', 'In Process'),
(4, 1, 'Perform database cleanup on production environment.', 'Unassigned'),
(5, 1, 'Develop new flash banners for new ad campaign.  Art assets are on the common drive in the GM project folder.', 'In Process'),
(6, 1, 'Fix JavaScript bug on vehicle pages.', 'Resolved'),
(7, 1, 'Re-test website in different browsers to ensure maximum compatibility with users.', 'Unassigned'),
(8, 1, 'Obtain new interior color information for new model year vehicles.', 'In Process'),
(9, 1, 'Patch web server to latest version.', 'Resolved'),
(10, 2, 'Load new benefits information.', 'In Process'),
(11, 2, 'Refresh site with new corporate branding.', 'Unassigned'),
(12, 2, 'Load new training modules.', 'Resolved'),
(13, 2, 'Update newsletter page with latest information.', 'In Process'),
(14, 2, 'Compress and load photos from the company picnic.', 'Resolved'),
(15, 3, 'Compress and load new commercials to About Us page.', 'In Process'),
(16, 3, 'Perform cleanup on CSS code to make website run faster.', 'Unassigned'),
(17, 3, 'Add a field to Contact Us form that captures phone number information.  This field should be required before user is allowed to submit.', 'In Process'),
(18, 3, 'Add new page called Community that details out the community outreach programs the company participates in.', 'Unassigned'),
(19, 3, 'Change main graphic on home page to a Flash piece that will rotate between several different images with nice transitions between each.', 'In Process'),
(20, 3, 'Update Samples page with updated screenshots from our new clients.', 'In Process'),
(21, 4, 'Update Mall directory with new information from client.', 'In Process'),
(22, 4, 'Add Gift Certificate module to site.  See specifications for this project on the project drive in the Lakeside Mall folder.', 'Unassigned'),
(23, 4, 'Update home page with new mall-wide 20% promotion.', 'Resolved'),
(24, 4, 'Update e-commerce engine to the new version of the software.', 'Resolved'),
(25, 4, 'Update careers page with new job openings.', 'In Process'),
(26, 4, 'Develop new flash 360 degree virtual tour components.  A photoshoot will need to be arranged with client to gather the necessary artwork.', 'Unassigned'),
(27, 4, 'Add new server to load balancer to alleviate performance issues with the site during heavy traffic hours.', 'In Process'),
(28, 5, 'Add new breakfast items to the Menu page.', 'Unassigned'),
(29, 5, 'Develop new online ordering application for website.  Specificatons for this project are on the project Drive in the Deli folder.', 'In Process'),
(30, 5, 'Update pricing information on the Menu page.', 'Resolved'),
(31, 5, 'Add a new page to the site called Delivery that talks about the new delivery service being offered.', 'Unassigned'),
(32, 4, 'Add a coupon page to the site that allows site users to print the coupon and get 10% any order in the store.', 'In Process'),
(33, 4, 'Client wants to add photographs of all of their sandwiches to their site.  Please arrange a photoshoot with client.  Pictures will be added to the Sandwiches page.', 'In Process'),
(34, 6, 'Load new products into the products database so that they can be ordered online.', 'In Process'),
(35, 6, 'Client would like a Free Shipping promotion added to the e-commerce engine.', 'Unassigned'),
(36, 6, 'Please integrate Google Maps into the Where to Find Us page.', 'Unassigned'),
(37, 6, 'Please add a promotion to the home page advertising the in-store paint and varnish seminar coming up next month.', 'Resolved'),
(38, 6, 'Add new customer testimonials to the Customer Feedback page.', 'Unassigned'),
(39, 6, 'Add a new discussion board to the site so users can share handy tips with one another.  Client says using open source phpBB software for this project is fine!', 'In Process'),
(40, 6, 'Fix bug in shopping cart software that was causing user shopping carts to be lost after 15 minutes of inactivity.', 'Resolved'),
(41, 7, 'Add a new Ask the Pharmacist feature to the site so patients can get their questions about various medications answered.', 'Unassigned'),
(42, 7, 'Develop an application where doctors can submit patient prescriptions online.  Specifications for this project are on the project drive in the Pharmacy folder.', 'Unassigned'),
(43, 7, 'Add new functionality to Store locations page that allows users to get directions to the store closest to them.', 'Resolved'),
(44, 7, 'Update privacy policy with new copy from client.', 'In Process'),
(45, 7, 'Fix shopping cart software so that vitamins come up correctly instead of cough medications.', 'Unassigned'),
(46, 7, 'Change code over to use CSS style sheets instead of inline FONT styling elements and TABLE tags.', 'In Process'),
(47, 7, 'Perform search engine optimation on the entire website for this client.', 'Unassigned'),
(48, 7, 'Add a new category of products to site - Beauty Supplies.  Place all items in this department on sale at 20% off.', 'Resolved'),
(49, 8, 'Add photos of wedding cakes to Weddings page to promote this side of the business.', 'In Process'),
(50, 8, 'Update pricing on pasteries page with current pricing.', 'Unassigned'),
(51, 8, 'Put promotion on homepage advertising new partnership with Deli site.  Now, customers can buy bakery cookies at the Deli.', 'In Process'),
(52, 8, 'Create a new page advertising the different cake\\frosting combinations available for customers.', 'Unassigned'),
(53, 8, 'Load a PDF form that customers can use to take advantage of the company\'s catering services.', 'Resolved');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`) VALUES
('admin', 'admin123'),
('bob', 'bob123'),
('zsuidan', 'password');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_num`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_num`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `project_num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
