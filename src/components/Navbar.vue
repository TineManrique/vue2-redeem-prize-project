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
                    <div class="user-text">
                        <h6>{{ user.firstName }} {{ user.lastName }}</h6>
                    </div>
                    <!-- <b-nav-item-dropdown right>
                        <template slot="button-content">{{ user.firstName }} {{ user.lastName }}</template>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                    </b-nav-item-dropdown> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
  <!-- <div class="navbar-header">
      <div class="logo-section">
          <div class="circle logo"></div>
          <div class="logo-text">
            <h2>LOGO</h2>
          </div>
      </div>
      <div class="user-section">
          <div class="circle profile"></div>
          <div class="user-text">
            <h5>{{ user.firstName }} {{ user.lastName }}</h5>
          </div>
      </div> -->
  <!-- </div> -->
</template>

<script>
export default {
    props: {
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

<style lang="scss">
    .navbar-header {
        background-color: $white;
        padding-left: 5px;
        overflow: hidden;
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
            color: #f6b220;
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
            background: #e8e8e8;
            margin-top: 11px;
            margin-right: 12px;
        }
        .user-text {
            margin-top: 15px;
        }
    }
</style>