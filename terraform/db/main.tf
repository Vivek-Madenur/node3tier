provider "google" {
  project = "magnificent-pen-332209"
  region  = "us-central1"
}

# resource "google_compute_network" "private_network" {
#   # provider = google-beta

#   name = "private-network"
# }

# resource "google_compute_global_address" "private_ip_address" {
#   # provider = google-beta

#   name          = "private-ip-address"
#   purpose       = "VPC_PEERING"
#   address_type  = "INTERNAL"
#   prefix_length = 16
#   network       = google_compute_network.private_network.id
# }

# resource "google_service_networking_connection" "private_vpc_connection" {
#   # provider = google-beta

#   network                 = google_compute_network.private_network.id
#   service                 = "servicenetworking.googleapis.com"
#   reserved_peering_ranges = [google_compute_global_address.private_ip_address.name]
# }


# n/w end

# [START cloud_sql_postgres_instance_80_db_n1_s2]
resource "google_sql_database_instance" "instance" {
  name             = "postgres-instance6"
  region           = "us-central1"
  database_version = "POSTGRES_14"

  # depends_on = [google_service_networking_connection.private_vpc_connection]
  
  settings {
    tier = "db-f1-micro"
    disk_autoresize="false"
    disk_size="10"
    disk_type="PD_SSD"

    # ip_configuration {
    #   ipv4_enabled    = false
    #   private_network = google_compute_network.private_network.id
    #   # public_ip_enabled = false
    # }
    
    backup_configuration {
        enabled = true
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