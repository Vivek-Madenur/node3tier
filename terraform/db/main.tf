provider "google" {
  project = "magnificent-pen-332209"
  region  = "asia-south1"
}

# [START cloud_sql_postgres_instance_80_db_n1_s2]
resource "google_sql_database_instance" "instance" {
  name             = "postgres-instance1"
  region           = "asia-south1"
  database_version = "POSTGRES_14"
  
  settings {
    tier = "db-f1-micro"
    disk_autoresize="false"
    disk_size="10"
    disk_type="PD_SSD"
    
    backup_configuration {
        enabled = true
        start_time = "23:00"
        point_in_time_recovery_enabled = true
        location = "us-central1"

    }
  }
  deletion_protection =  false
}
# [END cloud_sql_postgres_instance_80_db_n1_s2]

# [START cloud_sql_postgres_instance_user]
resource "random_password" "pwd" {
    length = 16
    special = false
}

resource "google_sql_user" "user" {
    name = "user"
    instance = google_sql_database_instance.instance.name
    password = random_password.pwd.result
}
# [END cloud_sql_postgres_instance_user]