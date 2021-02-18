<template>
    <div class="navbar-header">
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#">
                <font-awesome-icon icon="bullseye"></font-awesome-icon>
                <div class="logo-text"><h2>LOGO</h2></div>
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <div class="circle profile"></div>
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <div class="user-text" v-if="isLoggedInUser">
                                <h6>{{ user.firstName }} {{ user.lastName }}</h6>
                            </div>
                        </template>
                        <b-dropdown-item :to="{name: 'Logout'}" v-if="isLoggedInUser">Sign Out</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Login'}" v-else>Login</b-dropdown-item>
                        </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    props: {
        isLoggedInUser: {
            type: Boolean
        },
        user: {
            firstName: {
                type: String
            },
            lastName: {
                type: String
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar-header {
        background-color: $white;
        padding-left: 5px;
        .navbar-brand {
            display: inline-flex;
        };
        .nav-link {
            color: #040404;
        }
        .circle {
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }
        .fa-bullseye {
            color: $yellow-logo;
            width: 50px;
            height: 50px;
            margin-right: 9px;
        }
        .logo-text {
            margin-top: 7px;
            h2 {
                font-weight: 100;
            }
        }
        .profile {
            background: $profile-grey;
            margin-top: 11px;
            margin-right: 12px;
        }
        .user-text {
            display: inline-block;
            margin-top: 10px;
            color: $black-text;
        }
    }
</style>