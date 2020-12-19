import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource
const input_ports = [];
const output_ports = [];
const pipelines = [];
interface Config {
    count: number;
}

let config = new pulumi.Config();
let input_config = config.requireObject<Config>("input");
let output_config = config.requireObject<Config>("output");
let pipeline_config = config.requireObject<Config>("pipeline");
for (let i = 0; i < input_config.count; i++){
   const input_bucket = new aws.s3.Bucket(`mesh-input-bucket-${i}`);
   input_ports.push(input_bucket.id);
}
for (let i = 0; i < output_config.count; i++){
   const output_bucket = new aws.s3.Bucket(`mesh-output-bucket-${i}`);
   output_ports.push(output_bucket.id);
}
for (let i = 0; i < pipeline_config.count; i++){
   const pipeline = new aws.datapipeline.Pipeline(`mesh-pipeline-${i}`, {});
   pipelines.push(pipeline.id);
}
// Export the name of the mesh resources
export const inputPortsIds = input_ports;
export const outputPortsIds = output_ports;
export const pipelineIds = pipelines;
