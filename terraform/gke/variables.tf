variable "gke_username" {
  default     = ""
  description = "gke username"
}

variable "gke_password" {
  default     = ""
  description = "gke password"
}

variable "gke_num_nodes" {
  default     = 1
  description = "number of gke nodes"
}

variable "gke_min_num_nodes" {
  default     = 0
  description = "min number of gke nodes"
}

variable "gke_max_num_nodes" {
  default     = 2
  description = "max number of gke nodes"
}