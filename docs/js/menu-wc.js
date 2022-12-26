'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" data-src="images/logo.png">
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AcademicsModule.html" data-type="entity-link" >AcademicsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AcademicsRoutingModule.html" data-type="entity-link" >AcademicsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link" >AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5d188f6d49bdbc644fadfaba3cbbf77f9bb4496f515151fd2468e97d0fbc571641acf2be72bdb7d7f892aa7fe866106be0f732781683a68319c4ca9a12e0b682"' : 'data-target="#xs-components-links-module-AppModule-5d188f6d49bdbc644fadfaba3cbbf77f9bb4496f515151fd2468e97d0fbc571641acf2be72bdb7d7f892aa7fe866106be0f732781683a68319c4ca9a12e0b682"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5d188f6d49bdbc644fadfaba3cbbf77f9bb4496f515151fd2468e97d0fbc571641acf2be72bdb7d7f892aa7fe866106be0f732781683a68319c4ca9a12e0b682"' :
                                            'id="xs-components-links-module-AppModule-5d188f6d49bdbc644fadfaba3cbbf77f9bb4496f515151fd2468e97d0fbc571641acf2be72bdb7d7f892aa7fe866106be0f732781683a68319c4ca9a12e0b682"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link" >CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoursesModule-da4c4e4a0e176a91e1443039d02ba752133fe39d26481c1b52aca5141becc851479c1bc1baceaa024ea86e7653bc3816688002e1905d1dfda903950fe2be96b3"' : 'data-target="#xs-components-links-module-CoursesModule-da4c4e4a0e176a91e1443039d02ba752133fe39d26481c1b52aca5141becc851479c1bc1baceaa024ea86e7653bc3816688002e1905d1dfda903950fe2be96b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesModule-da4c4e4a0e176a91e1443039d02ba752133fe39d26481c1b52aca5141becc851479c1bc1baceaa024ea86e7653bc3816688002e1905d1dfda903950fe2be96b3"' :
                                            'id="xs-components-links-module-CoursesModule-da4c4e4a0e176a91e1443039d02ba752133fe39d26481c1b52aca5141becc851479c1bc1baceaa024ea86e7653bc3816688002e1905d1dfda903950fe2be96b3"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesRoutingModule.html" data-type="entity-link" >CoursesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-be0c55f002839b02f82773a6e80373b1f6c76724c7aa38d3763647934a029429936062cbf2e45830bca784ee97402f0942003e7afb228050af344c88cfde2f96"' : 'data-target="#xs-components-links-module-DashboardModule-be0c55f002839b02f82773a6e80373b1f6c76724c7aa38d3763647934a029429936062cbf2e45830bca784ee97402f0942003e7afb228050af344c88cfde2f96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-be0c55f002839b02f82773a6e80373b1f6c76724c7aa38d3763647934a029429936062cbf2e45830bca784ee97402f0942003e7afb228050af344c88cfde2f96"' :
                                            'id="xs-components-links-module-DashboardModule-be0c55f002839b02f82773a6e80373b1f6c76724c7aa38d3763647934a029429936062cbf2e45830bca784ee97402f0942003e7afb228050af344c88cfde2f96"' }>
                                            <li class="link">
                                                <a href="components/AnalyticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalyticsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatabasesModule-9d29405195ec051a3c34f181302e125e8454579880903d05cdb9a8df535c2d6bc76eaa80a722c5307252bdf78897d7c3b5a29387351807858e3d62cd83d26606"' : 'data-target="#xs-components-links-module-DatabasesModule-9d29405195ec051a3c34f181302e125e8454579880903d05cdb9a8df535c2d6bc76eaa80a722c5307252bdf78897d7c3b5a29387351807858e3d62cd83d26606"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatabasesModule-9d29405195ec051a3c34f181302e125e8454579880903d05cdb9a8df535c2d6bc76eaa80a722c5307252bdf78897d7c3b5a29387351807858e3d62cd83d26606"' :
                                            'id="xs-components-links-module-DatabasesModule-9d29405195ec051a3c34f181302e125e8454579880903d05cdb9a8df535c2d6bc76eaa80a722c5307252bdf78897d7c3b5a29387351807858e3d62cd83d26606"' }>
                                            <li class="link">
                                                <a href="components/AddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesRoutingModule.html" data-type="entity-link" >DatabasesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DataModule.html" data-type="entity-link" >DataModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailModule.html" data-type="entity-link" >DetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailModule-13e699950e2c57719065c103474cc59905b26e457ff131858fe98869b102082df339351f10bc37ccbaaa6eb464b03bba11a54982081d6b38d809084df14e5594"' : 'data-target="#xs-components-links-module-DetailModule-13e699950e2c57719065c103474cc59905b26e457ff131858fe98869b102082df339351f10bc37ccbaaa6eb464b03bba11a54982081d6b38d809084df14e5594"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailModule-13e699950e2c57719065c103474cc59905b26e457ff131858fe98869b102082df339351f10bc37ccbaaa6eb464b03bba11a54982081d6b38d809084df14e5594"' :
                                            'id="xs-components-links-module-DetailModule-13e699950e2c57719065c103474cc59905b26e457ff131858fe98869b102082df339351f10bc37ccbaaa6eb464b03bba11a54982081d6b38d809084df14e5594"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailRoutingModule.html" data-type="entity-link" >DetailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotPagesFoundModule.html" data-type="entity-link" >NotPagesFoundModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotPagesFoundRoutingModule.html" data-type="entity-link" >NotPagesFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsModule.html" data-type="entity-link" >ProjectsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectsModule-86b360a0f3bc14033f85a0e2b584b86ae86635ea923cd362d67cdd3d842bc02fff74e0091589cfaf76f5b4a8afa65d81b8393e4b57cf2ac3bfa133e03ff5d235"' : 'data-target="#xs-components-links-module-ProjectsModule-86b360a0f3bc14033f85a0e2b584b86ae86635ea923cd362d67cdd3d842bc02fff74e0091589cfaf76f5b4a8afa65d81b8393e4b57cf2ac3bfa133e03ff5d235"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectsModule-86b360a0f3bc14033f85a0e2b584b86ae86635ea923cd362d67cdd3d842bc02fff74e0091589cfaf76f5b4a8afa65d81b8393e4b57cf2ac3bfa133e03ff5d235"' :
                                            'id="xs-components-links-module-ProjectsModule-86b360a0f3bc14033f85a0e2b584b86ae86635ea923cd362d67cdd3d842bc02fff74e0091589cfaf76f5b4a8afa65d81b8393e4b57cf2ac3bfa133e03ff5d235"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsRoutingModule.html" data-type="entity-link" >ProjectsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-33c6c72a57ce2bb7f8ac4fc38051d4976f684229283bb3b1d568dc1088aa9aaaac77a1450eecd142ae4cd87d0d48c734402181c1e3578db25fe247c0b2729e0a"' : 'data-target="#xs-components-links-module-SharedModule-33c6c72a57ce2bb7f8ac4fc38051d4976f684229283bb3b1d568dc1088aa9aaaac77a1450eecd142ae4cd87d0d48c734402181c1e3578db25fe247c0b2729e0a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-33c6c72a57ce2bb7f8ac4fc38051d4976f684229283bb3b1d568dc1088aa9aaaac77a1450eecd142ae4cd87d0d48c734402181c1e3578db25fe247c0b2729e0a"' :
                                            'id="xs-components-links-module-SharedModule-33c6c72a57ce2bb7f8ac4fc38051d4976f684229283bb3b1d568dc1088aa9aaaac77a1450eecd142ae4cd87d0d48c734402181c1e3578db25fe247c0b2729e0a"' }>
                                            <li class="link">
                                                <a href="components/CardDatabaseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardDatabaseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectPeriodModule.html" data-type="entity-link" >SubjectPeriodModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SubjectPeriodModule-c655a9439f7958b4cf8cc07bfe22d29f4532557ddcdb0cc028d5c1d071c57fe0f2f6a694ddd067575a85b866765630aa6dd7aa194be956b53beaee4c9c6ed55c"' : 'data-target="#xs-components-links-module-SubjectPeriodModule-c655a9439f7958b4cf8cc07bfe22d29f4532557ddcdb0cc028d5c1d071c57fe0f2f6a694ddd067575a85b866765630aa6dd7aa194be956b53beaee4c9c6ed55c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubjectPeriodModule-c655a9439f7958b4cf8cc07bfe22d29f4532557ddcdb0cc028d5c1d071c57fe0f2f6a694ddd067575a85b866765630aa6dd7aa194be956b53beaee4c9c6ed55c"' :
                                            'id="xs-components-links-module-SubjectPeriodModule-c655a9439f7958b4cf8cc07bfe22d29f4532557ddcdb0cc028d5c1d071c57fe0f2f6a694ddd067575a85b866765630aa6dd7aa194be956b53beaee4c9c6ed55c"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectPeriodRoutingModule.html" data-type="entity-link" >SubjectPeriodRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectsModule.html" data-type="entity-link" >SubjectsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectsRoutingModule.html" data-type="entity-link" >SubjectsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-3c50f1666cfb6e94a1591e6eb6b806baa61fc5d8653d1f33a3b669e1cd533124efc1210fc067a0cb407aef97b2d708bfd3a73299decfd329c40b917d3bbe1f55"' : 'data-target="#xs-components-links-module-UsersModule-3c50f1666cfb6e94a1591e6eb6b806baa61fc5d8653d1f33a3b669e1cd533124efc1210fc067a0cb407aef97b2d708bfd3a73299decfd329c40b917d3bbe1f55"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-3c50f1666cfb6e94a1591e6eb6b806baa61fc5d8653d1f33a3b669e1cd533124efc1210fc067a0cb407aef97b2d708bfd3a73299decfd329c40b917d3bbe1f55"' :
                                            'id="xs-components-links-module-UsersModule-3c50f1666cfb6e94a1591e6eb6b806baa61fc5d8653d1f33a3b669e1cd533124efc1210fc067a0cb407aef97b2d708bfd3a73299decfd329c40b917d3bbe1f55"' }>
                                            <li class="link">
                                                <a href="components/DetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AccessComponent.html" data-type="entity-link" >AccessComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivityComponent.html" data-type="entity-link" >ActivityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddComponent-1.html" data-type="entity-link" >AddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddComponent-2.html" data-type="entity-link" >AddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddComponent-3.html" data-type="entity-link" >AddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddComponent-4.html" data-type="entity-link" >AddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddComponent-5.html" data-type="entity-link" >AddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardCourseComponent.html" data-type="entity-link" >CardCourseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardProjectComponent.html" data-type="entity-link" >CardProjectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardUserComponent.html" data-type="entity-link" >CardUserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CarouselComponent.html" data-type="entity-link" >CarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CollaboratorsComponent.html" data-type="entity-link" >CollaboratorsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteProjectComponent.html" data-type="entity-link" >DeleteProjectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeployComponent.html" data-type="entity-link" >DeployComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeploymentsComponent.html" data-type="entity-link" >DeploymentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailComponent-1.html" data-type="entity-link" >DetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailComponent-2.html" data-type="entity-link" >DetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailComponent-3.html" data-type="entity-link" >DetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailComponent-4.html" data-type="entity-link" >DetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomePageComponent.html" data-type="entity-link" >HomePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListComponent-1.html" data-type="entity-link" >ListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListComponent-2.html" data-type="entity-link" >ListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListComponent-3.html" data-type="entity-link" >ListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListComponent-4.html" data-type="entity-link" >ListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListComponent-5.html" data-type="entity-link" >ListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LogsComponent.html" data-type="entity-link" >LogsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MaintenanceModeComponent.html" data-type="entity-link" >MaintenanceModeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MetricComponent.html" data-type="entity-link" >MetricComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MetricsComponent.html" data-type="entity-link" >MetricsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OverviewComponent.html" data-type="entity-link" >OverviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Page401Component.html" data-type="entity-link" >Page401Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Page404Component.html" data-type="entity-link" >Page404Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Page500Component.html" data-type="entity-link" >Page500Component</a>
                            </li>
                            <li class="link">
                                <a href="components/PhaseComponent.html" data-type="entity-link" >PhaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PhasesComponent.html" data-type="entity-link" >PhasesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResourcesComponent.html" data-type="entity-link" >ResourcesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent.html" data-type="entity-link" >SettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableDatatableComponent.html" data-type="entity-link" >TableDatatableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TagsComponent.html" data-type="entity-link" >TagsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VarsComponent.html" data-type="entity-link" >VarsComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/PermissionsDirective.html" data-type="entity-link" >PermissionsDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/RolesDirective.html" data-type="entity-link" >RolesDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/HttpApi.html" data-type="entity-link" >HttpApi</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpError.html" data-type="entity-link" >HttpError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Project.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnalyticsService.html" data-type="entity-link" >AnalyticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CollaboratorsService.html" data-type="entity-link" >CollaboratorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContributorsMock.html" data-type="entity-link" >ContributorsMock</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConvertFileService.html" data-type="entity-link" >ConvertFileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursesMock.html" data-type="entity-link" >CoursesMock</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursesService.html" data-type="entity-link" >CoursesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseStudentService.html" data-type="entity-link" >CourseStudentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrentProjectService.html" data-type="entity-link" >CurrentProjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseTypesService.html" data-type="entity-link" >DatabaseTypesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeploymentsService.html" data-type="entity-link" >DeploymentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsService.html" data-type="entity-link" >LogsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetricsService.html" data-type="entity-link" >MetricsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectsService.html" data-type="entity-link" >ProjectsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectValidateContextService.html" data-type="entity-link" >ProjectValidateContextService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesMock.html" data-type="entity-link" >RolesMock</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarService.html" data-type="entity-link" >SidebarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubjectPeriodService.html" data-type="entity-link" >SubjectPeriodService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubjectsService.html" data-type="entity-link" >SubjectsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VarsService.html" data-type="entity-link" >VarsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorHandlerInterceptor.html" data-type="entity-link" >ErrorHandlerInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpTokenInterceptor.html" data-type="entity-link" >HttpTokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NoAuthGuard.html" data-type="entity-link" >NoAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICourse.html" data-type="entity-link" >ICourse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICourseStudent.html" data-type="entity-link" >ICourseStudent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatabase.html" data-type="entity-link" >IDatabase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDictionary.html" data-type="entity-link" >IDictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFile.html" data-type="entity-link" >IFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFileDto.html" data-type="entity-link" >IFileDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHttpError.html" data-type="entity-link" >IHttpError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProject.html" data-type="entity-link" >IProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProjectDto.html" data-type="entity-link" >IProjectDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRole.html" data-type="entity-link" >IRole</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISidebar.html" data-type="entity-link" >ISidebar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStage.html" data-type="entity-link" >IStage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStageDto.html" data-type="entity-link" >IStageDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISubject.html" data-type="entity-link" >ISubject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISubjectPeriod.html" data-type="entity-link" >ISubjectPeriod</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITag.html" data-type="entity-link" >ITag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITagElement.html" data-type="entity-link" >ITagElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITokenDto.html" data-type="entity-link" >ITokenDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypeDatabase.html" data-type="entity-link" >ITypeDatabase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypeTag.html" data-type="entity-link" >ITypeTag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserDto.html" data-type="entity-link" >IUserDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IValidationMessage.html" data-type="entity-link" >IValidationMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IValidationMessages.html" data-type="entity-link" >IValidationMessages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVar.html" data-type="entity-link" >IVar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Status.html" data-type="entity-link" >Status</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CapitalizePipe.html" data-type="entity-link" >CapitalizePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/RemoveWhitespacePipe.html" data-type="entity-link" >RemoveWhitespacePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/TruncateTextPipe.html" data-type="entity-link" >TruncateTextPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});