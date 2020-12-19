import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const names = [];
const input_bucket = new aws.s3.Bucket(`mesh-input-bucket-${i}`);
const output_bucket = new aws.s3.Bucket(`mesh-output-bucket-${i}`);
names.push(input_bucket.id);
names.push(output_bucket.id);
// Export the name of the buckets
export const bucketNames = names;
