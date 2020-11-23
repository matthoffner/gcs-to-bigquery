# gcs-to-bigquery-cloudfunction

Cloud function for updating a BigQuery table with a Google Cloud Storage bucket change.

```sh
gcloud functions deploy cloudStorageToBigQuery \
      --set-env-vars GOOGLE_APPLICATION_CREDENTIALS=config/my_service_account.json,BUCKET=my_bucket,DATASET=my_dataset,TABLE=my_table \
      --runtime nodejs12 \
      --trigger-resource my_bucket \
      --trigger-event google.storage.object.finalize
```

## Environment variables

```sh
GOOGLE_APPLICATION_CREDENTIALS=
```

Path to service account. Needs to be authorized for Big Query and GCS.

```sh
BUCKET=
```

Bucket name

```sh
DATASET=
```

BigQuery dataset

```sh
TABLE=
```

BigQuery table
