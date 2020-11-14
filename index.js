const BigQuery = require('@google-cloud/bigquery');
const Storage = require('@google-cloud/storage');
const bq = new BigQuery();
const storage = new Storage();

exports.cloudStorageToBigQuery = (data) => {
    bq.dataset(process.env.DATASET)
        .table(process.env.TABLE)
        .load(storage.bucket(process.env.BUCKET_NAME)
        .file(data.name), { autodetect: true, writeDisposition: 'WRITE_APPEND' });
}