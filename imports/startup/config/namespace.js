import { HTTP } from 'meteor/http';
import { Email } from 'meteor/email';

// Global namespace
$H = Meteor;

// Add the getting of constraints
$H.harbors = {};

$H.HTTP = HTTP;
$H.Email = Email;
