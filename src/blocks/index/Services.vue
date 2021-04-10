<template>
    <div id="services" class="block spacer p-bottom-xl-2">
        <div class="wrapper">
            <div class="row gutter-width-md with-pb-md service-items">
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="service">
                        <div class="service-icon">
                            <i class="malex-icon-strategy"></i>
                        </div>

                        <h4 class="service-t-head">Agile Moves</h4>

                        <p class="service-description">An interactive and collaborative approach to project managment and software development.</p>

                        <div class="service-btn">
                            <router-link title="Read more" class="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" to="/service-inside">
                                <i class="malex-icon-arrow-right i-large"></i>
                                <span class="btn-text">Read more</span>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="service">
                        <div class="service-icon">
                            <i class="malex-icon-choice"></i>
                        </div>

                        <h4 class="service-t-head">Best Minds</h4>

                        <p class="service-description">Strong Leadership and highly skilled talent to ensure high performance at all times.</p>

                        <div class="service-btn">
                            <router-link title="Read more" class="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" to="/service-inside">
                                <i class="malex-icon-arrow-right i-large"></i>
                                <span class="btn-text">Read more</span>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="service">
                        <div class="service-icon">
                            <i class="malex-icon-chart-5"></i>
                        </div>

                        <h4 class="service-t-head">Result Oriented</h4>

                        <p class="service-description">Focused on the outcome while keeping a tight reign on the process and delivery time.</p>

                        <div class="service-btn">
                            <router-link title="Read more" class="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" to="/service-inside">
                                <i class="malex-icon-arrow-right i-large"></i>
                                <span class="btn-text">Read more</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Services'
    }
</script>
