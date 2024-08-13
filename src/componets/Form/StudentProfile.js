import React from 'react'

export default function StudentProfile() {
  return (
    <div>
    

<head>
    <meta charset="UTF-8">,
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Student Profile</h3>
            </div>
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-md-6">
                        <h5>Student ID:</h5>
                        <p>{{ studentId }}</p>
                    </div>
                    <div class="col-md-6">
                        <h5>Registration Number:</h5>
                        <p>{{ regNumber }}</p>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <h5>Program:</h5>
                        <p>{{ programprogramName }}</p>
                    </div>
                    <div class="col-md-6">
                        <h5>User ID:</h5>
                        <p>{{ userId }}</p>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <a href="/students/edit/{{ studentId }}" class="btn btn-primary">Edit Profile</a>
                <a href="/students" class="btn btn-secondary">Back to List</a>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>


    </div>
  ),
},
