var auth = document.getElementById("li-authentication")
var user = document.getElementById("li-user")
var profile = document.getElementById("li-profile")

var authSection = document.getElementById("authenticationSection")
var userSection = document.getElementById("userSection")
var profileSection = document.getElementById("profileSection")

var authChild = document.getElementById("child-authentication")
var userChild = document.getElementById("child-user")
var profileChild = document.getElementById("child-profile")

var authIsCollapsed = false
var userIsCollapsed = true
var profileIsCollapsed = true

var signinSection = document.getElementById("signinSection")
var registerSection = document.getElementById("registerSection")
var getAllSection = document.getElementById("getAllSection")
var getUserSection = document.getElementById("getUserSection")
var deleteUserSection = document.getElementById("deleteUserSection")
var getProfileSection = document.getElementById("getProfileSection")
var updateProfileSection = document.getElementById("updateProfileSection")

document.querySelector("#child-authentication #signin").addEventListener("click", function() {
    signinSection.scrollIntoView()
})

document.querySelector("#child-authentication #register").addEventListener("click", function() {
    registerSection.scrollIntoView()
})

document.querySelector("#child-user #getAll").addEventListener("click", function() {
    getAllSection.scrollIntoView()
})

document.querySelector("#child-user #getUser").addEventListener("click", function() {
    getUserSection.scrollIntoView()
})

document.querySelector("#child-user #deleteUser").addEventListener("click", function() {
    deleteUserSection.scrollIntoView()
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
            }
            break
        case "user":
            if (user.className == "") {
                user.className += "active"
                document.getElementById("li-user").className = user.className
                removeActiveClass("authentication")
                removeActiveClass("profile")
            }
            break
        case "profile":
            if (profile.className == "") {
                profile.className += "active"
                document.getElementById("li-profile").className = profile.className
                removeActiveClass("authentication")
                removeActiveClass("user")
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
    profileIsCollapsed = true

    switch (activeChild) {
        case "authentication":
            authIsCollapsed = false
            break
        case "user":
            userIsCollapsed = false
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

    if (profileIsCollapsed) {
        if (profileChild.className == "") {
            profileChild.className += "collapse"
        }
    } else {
        profileChild.className = ""
    }

    document.getElementById("child-authentication").className = authChild.className
    document.getElementById("child-user").className = userChild.className
    document.getElementById("child-profile").className = profileChild.className
}