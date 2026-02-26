class ApiResponse {
    constructor(statuscode,massage,data="success"){
        this.statuscode=statuscode
        this.massage=massage
        this.data=data
        this.success=statuscode<400
    
    }
}