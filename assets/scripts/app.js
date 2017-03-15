var auth = document.getElementById("li-authentication")
var user = document.getElementById("li-user")
var datasource = document.getElementById("li-datasource")
var appointment = document.getElementById("li-appointment")
var profile = document.getElementById("li-profile")

var authSection = document.getElementById("authenticationSection")
var userSection = document.getElementById("userSection")
var datasourceSection = document.getElementById("datasourceSection")
var appointmentSection = document.getElementById("appointmentSection")
var profileSection = document.getElementById("profileSection")

var authChild = document.getElementById("child-authentication")
var userChild = document.getElementById("child-user")
var datasourceChild = document.getElementById("child-datasource")
var appointmentChild = document.getElementById("child-appointment")
var profileChild = document.getElementById("child-profile")

var authIsCollapsed = false
var userIsCollapsed = true
var datasourceIsCollapsed = true
var appointmentIsCollapsed = true
var profileIsCollapsed = true

var signinSection = document.getElementById("signinSection")
var registerSection = document.getElementById("registerSection")
var basicInfoSection = document.getElementById("basicInfoSection")
var necessaryInfoSection = document.getElementById("necessaryInfoSection")
var importantInfoSection = document.getElementById("importantInfoSection")
var getCountriesSection = document.getElementById("getCountriesSection")
var getCitiesSection = document.getElementById("getCitiesSection")
var getDistrictsSection = document.getElementById("getDistrictsSection")
var getLocationsSection = document.getElementById("getLocationsSection")
var getVouchersSection = document.getElementById("getVouchersSection")
var getTypesSection = document.getElementById("getTypesSection")
var getAllTimeSection = document.getElementById("getAllTimeSection")
var getEcoTimeSection = document.getElementById("getEcoTimeSection")
var getSelectedTimeSection = document.getElementById("getSelectedTimeSection")
var getDaysOfWeekSection = document.getElementById("getDaysOfWeekSection")
var getMachinesSection = document.getElementById("getMachinesSection")
var bookTimeSection = document.getElementById("bookTimeSection");
var releaseTimeSection = document.getElementById("releaseTimeSection")
var getProfileSection = document.getElementById("getProfileSection")
var updateProfileSection = document.getElementById("updateProfileSection")

document.querySelector("#child-authentication #signin").addEventListener("click", function() {
    signinSection.scrollIntoView()
})

document.querySelector("#child-authentication #register").addEventListener("click", function() {
    registerSection.scrollIntoView()
})

document.querySelector("#child-user #basicInfo").addEventListener("click", function() {
    basicInfoSection.scrollIntoView()
})

document.querySelector("#child-user #necessaryInfo").addEventListener("click", function() {
    necessaryInfoSection.scrollIntoView()
})

document.querySelector("#child-user #importantInfo").addEventListener("click", function() {
    importantInfoSection.scrollIntoView()
})

document.querySelector("#child-datasource #getCountries").addEventListener("click", function() {
    getCountriesSection.scrollIntoView()
})

document.querySelector("#child-datasource #getCities").addEventListener("click", function() {
    getCitiesSection.scrollIntoView()
})

document.querySelector("#child-datasource #getDistricts").addEventListener("click", function() {
    getDistrictsSection.scrollIntoView()
})

document.querySelector("#child-datasource #getLocation").addEventListener("click", function() {
    getLocationsSection.scrollIntoView()
})

document.querySelector("#child-datasource #getVouchers").addEventListener("click", function() {
    getVouchersSection.scrollIntoView()
})

document.querySelector("#child-datasource #getType").addEventListener("click", function() {
    getTypesSection.scrollIntoView()
})

document.querySelector("#child-datasource #getAllTime").addEventListener("click", function() {
    getAllTimeSection.scrollIntoView()
})

document.querySelector("#child-datasource #getEcoTime").addEventListener("click", function() {
    getEcoTimeSection.scrollIntoView()
})

document.querySelector("#child-datasource #getSelectedTime").addEventListener("click", function() {
    getSelectedTimeSection.scrollIntoView()
})

document.querySelector("#child-datasource #getDaysOfWeek").addEventListener("click", function() {
    getDaysOfWeekSection.scrollIntoView()
})

document.querySelector("#child-datasource #getMachines").addEventListener("click", function() {
    getMachinesSection.scrollIntoView()
})

document.querySelector("#child-appointment #bookTime").addEventListener("click", function() {
    bookTimeSection.scrollIntoView()
})

document.querySelector("#child-appointment #releaseTime").addEventListener("click", function() {
    releaseTimeSection.scrollIntoView()
})

document.querySelector("#child-profile #getProfile").addEventListener("click", function() {
    getProfileSection.scrollIntoView()
})

document.querySelector("#child-profile #updateProfile").addEventListener("click", function() {
    updateProfileSection.scrollIntoView()
})

function authentication_click() {
    addActiveClass("authentication")
    handleChildCollapse("authentication")
    authSection.scrollIntoView({ block: "start", behavior: "smooth" })
}

function user_click() {
    addActiveClass("user")
    handleChildCollapse("user")
    userSection.scrollIntoView({ block: "start", behavior: "smooth" })
}

function datasource_click() {
    addActiveClass("datasource")
    handleChildCollapse("datasource")
    datasourceSection.scrollIntoView({ block: "start", behavior: "smooth" })
}

function appointment_click() {
    addActiveClass("appointment")
    handleChildCollapse("appointment")
    appointmentSection.scrollIntoView({ block: "start", behavior: "smooth" })
}

function profile_click() {
    addActiveClass("profile")
    handleChildCollapse("profile")
    profileSection.scrollIntoView()
}

function addActiveClass(addToEl) {
    switch (addToEl) {
        case "authentication":
            if (auth.className == "") {
                auth.className += "active"
                document.getElementById("li-authentication").className = auth.className
                removeActiveClass("user")
                removeActiveClass("profile")
                removeActiveClass("datasource")
                removeActiveClass("appointment")
            }
            break
        case "user":
            if (user.className == "") {
                user.className += "active"
                document.getElementById("li-user").className = user.className
                removeActiveClass("authentication")
                removeActiveClass("profile")
                removeActiveClass("datasource")
                removeActiveClass("appointment")
            }
            break
        case "datasource":
            if (datasource.className == "") {
                datasource.className += "active"
                document.getElementById("li-datasource").className = datasource.className
                removeActiveClass("authentication")
                removeActiveClass("profile")
                removeActiveClass("user")
                removeActiveClass("appointment")
            }
            break
        case "appointment":
            if (appointment.className == "") {
                appointment.className += "active"
                document.getElementById("li-appointment").className = appointment.className
                removeActiveClass("authentication")
                removeActiveClass("profile")
                removeActiveClass("user")
                removeActiveClass("datasource")
            }
            break
        case "profile":
            if (profile.className == "") {
                profile.className += "active"
                document.getElementById("li-profile").className = profile.className
                removeActiveClass("authentication")
                removeActiveClass("user")
                removeActiveClass("datasource")
                removeActiveClass("appointment")
            }
            break
    }
}

function removeActiveClass(removeFromEl) {
    switch (removeFromEl) {
        case "authentication":

            if (auth.className.includes("active")) {
                auth.className = ""
                document.getElementById("li-authentication").className = auth.className
            }
            break
        case "user":

            if (user.className.includes("active")) {
                user.className = ""
                document.getElementById("li-user").className = user.className
            }
            break
        case "datasource":

            if (datasource.className.includes("active")) {
                datasource.className = ""
                document.getElementById("li-datasource").className = datasource.className
            }
            break
        case "appointment":

            if (appointment.className.includes("active")) {
                appointment.className = ""
                document.getElementById("li-appointment").className = appointment.className
            }
            break
        case "profile":

            if (profile.className.includes("active")) {
                profile.className = ""
                document.getElementById("li-profile").className = profile.className
            }
            break
    }
}

function handleActiveChild(activeChild) {
    authIsCollapsed = true
    userIsCollapsed = true
    datasourceIsCollapsed = true
    profileIsCollapsed = true

    switch (activeChild) {
        case "authentication":
            authIsCollapsed = false
            break
        case "user":
            userIsCollapsed = false
            break
        case "datasource":
            datasourceIsCollapsed = false
            break
        case "appointment":
            appointmentIsCollapsed = false
            break
        case "profile":
            profileIsCollapsed = false
            break
    }
}

function handleChildCollapse(activeChild) {
    handleActiveChild(activeChild)

    if (authIsCollapsed) {
        if (authChild.className == "") {
            authChild.className += "collapse"
        }
    } else {
        authChild.className = ""
    }

    if (userIsCollapsed) {
        if (userChild.className == "") {
            userChild.className += "collapse"
        }
    } else {
        userChild.className = ""
    }

    if (datasourceIsCollapsed) {
        if (datasourceChild.className == "") {
            datasourceChild.className += "collapse"
        }
    } else {
        datasourceChild.className = ""
    }

    if (appointmentIsCollapsed) {
        if (appointmentChild.className == "") {
            appointmentChild.className += "collapse"
        }
    } else {
        appointmentChild.className = ""
    }

    if (profileIsCollapsed) {
        if (profileChild.className == "") {
            profileChild.className += "collapse"
        }
    } else {
        profileChild.className = ""
    }

    document.getElementById("child-authentication").className = authChild.className
    document.getElementById("child-user").className = userChild.className
    document.getElementById("child-datasource").className = datasourceChild.className
    document.getElementById("child-appointment").className = appointmentChild.className
    document.getElementById("child-profile").className = profileChild.className
}