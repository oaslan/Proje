



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>cordova-plugins/cordova-plugins.js at master · cdibened/cordova-plugins</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="cdibened/cordova-plugins" name="twitter:title" /><meta content="cordova-plugins - NPM package to list/download available Phonegap plugins from http://plugins.cordova.io/ and/or http://plugreg.com/" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/496997?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/496997?v=2&amp;s=400" property="og:image" /><meta content="cdibened/cordova-plugins" property="og:title" /><meta content="https://github.com/cdibened/cordova-plugins" property="og:url" /><meta content="cordova-plugins - NPM package to list/download available Phonegap plugins from http://plugins.cordova.io/ and/or http://plugreg.com/" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="9BDFCF27:592A:1B65C8B:54103397" name="octolytics-dimension-request_id" /><meta content="6433605" name="octolytics-actor-id" /><meta content="oaslan" name="octolytics-actor-login" /><meta content="75a82fe713ae9de336e1f2cc2b6027c3a1fc726a8a876013d0a8f94c8d0f2396" name="octolytics-actor-hash" />
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="3sd1PDk4AMRMfsmAwV0F/LBWxOCMfr3gfsznawAziNK372ESg5MVL4xb2Ef5hTU6JbP+X2zY0jiQIkD2qneDvg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-250d7e217597cd75be73e4ea1c76a57d228d3d40.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-30a95172d2f2a196ba5394de321fdee467b821e3.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="6539c93ca6c8591ebce2cf2795c3c1c3">

      
  <meta name="description" content="cordova-plugins - NPM package to list/download available Phonegap plugins from http://plugins.cordova.io/ and/or http://plugreg.com/">
  <meta name="go-import" content="github.com/cdibened/cordova-plugins git https://github.com/cdibened/cordova-plugins.git">

  <meta content="496997" name="octolytics-dimension-user_id" /><meta content="cdibened" name="octolytics-dimension-user_login" /><meta content="14379637" name="octolytics-dimension-repository_id" /><meta content="cdibened/cordova-plugins" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14379637" name="octolytics-dimension-repository_network_root_id" /><meta content="cdibened/cordova-plugins" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/cdibened/cordova-plugins/commits/master.atom" rel="alternate" title="Recent Commits to cordova-plugins:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search">
          <form accept-charset="UTF-8" action="/cdibened/cordova-plugins/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/cdibened/cordova-plugins/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/oaslan" data-ga-click="Header, go to profile, text:username">
      <img alt="Oğuz" class="avatar" data-user="6433605" height="20" src="https://avatars0.githubusercontent.com/u/6433605?v=2&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">oaslan</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="cdibened/cordova-plugins">This repository</span>
    </li>
      <li>
        <a href="/cdibened/cordova-plugins/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="q5IX1XctfUXKZb4AHaiRcUkSX4VXk0inhgmBJg5NMPHqu16Br+rrWllMnM/8lQxkr+Qr76KxezG6bYg6adwYmQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+WfhLA0si/GBr4s7CCdxzbywgfk5n19qLI8gzTf76zh9OVf+woCOd2+5KhuzUa8EZ/YnESFjYhG9Hr+ZusgJ8w==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="14379637" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/cdibened/cordova-plugins/watchers">
        1
      </a>
      <a href="/cdibened/cordova-plugins/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/cdibened/cordova-plugins/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7xii9gvcLhgwe45Q5VcYr1r9GNJkaihwdKGEP6EBQcijjcShY44rER+IY0Lokc9HYMP3l8aiR+fJoCBVS3R95Q==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar cdibened/cordova-plugins">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/cdibened/cordova-plugins/stargazers">
          1
        </a>
</form>
    <form accept-charset="UTF-8" action="/cdibened/cordova-plugins/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="U3ZP7TP6ejmaKNfCZgMeplBUs8AUC6kvpCiiglEie/RKyAzt8LEFrz1/ENYdqdkLAo338wzqGPzNpHU8PuMRZg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star cdibened/cordova-plugins">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/cdibened/cordova-plugins/stargazers">
          1
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/cdibened/cordova-plugins/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of cdibened/cordova-plugins to your account" aria-label="Fork your own copy of cdibened/cordova-plugins to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/cdibened/cordova-plugins/network" class="social-count">5</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/cdibened" class="url fn" itemprop="url" rel="author"><span itemprop="title">cdibened</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/cdibened/cordova-plugins" class="js-current-repository js-repo-home-link">cordova-plugins</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/cdibened/cordova-plugins/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/cdibened/cordova-plugins" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /cdibened/cordova-plugins">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/cdibened/cordova-plugins/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /cdibened/cordova-plugins/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/cdibened/cordova-plugins/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /cdibened/cordova-plugins/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/cdibened/cordova-plugins/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /cdibened/cordova-plugins/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/cdibened/cordova-plugins/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /cdibened/cordova-plugins/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/cdibened/cordova-plugins/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /cdibened/cordova-plugins/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/cdibened/cordova-plugins.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/cdibened/cordova-plugins.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:cdibened/cordova-plugins.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:cdibened/cordova-plugins.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/cdibened/cordova-plugins" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/cdibened/cordova-plugins" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/cdibened/cordova-plugins" class="minibutton sidebar-button" title="Save cdibened/cordova-plugins to your computer and use it in GitHub Desktop." aria-label="Save cdibened/cordova-plugins to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/cdibened/cordova-plugins/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of cdibened/cordova-plugins as a zip file"
                   title="Download the contents of cdibened/cordova-plugins as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/cdibened/cordova-plugins/blob/5cd00ee8824216d5ae50ead5297c75f2c03bcdb1/bin/cordova-plugins.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5aa059f6f04c6f1ff1464dcd159e8c52 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cdibened/cordova-plugins/blob/master/bin/cordova-plugins.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/cdibened/cordova-plugins/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="bin/cordova-plugins.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/cdibened/cordova-plugins" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">cordova-plugins</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/cdibened/cordova-plugins/tree/master/bin" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bin</span></a></span><span class="separator"> / </span><strong class="final-path">cordova-plugins.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/cdibened/cordova-plugins/contributors/master/bin/cordova-plugins.js">
    <div class="file-history-tease-header">
      Fetching contributors&hellip;
    </div>

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>87 lines (82 sloc)</span>
          <span class="meta-divider"></span>
        <span>3.823 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/cdibened/cordova-plugins/raw/master/bin/cordova-plugins.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/cdibened/cordova-plugins/blame/master/bin/cordova-plugins.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/cdibened/cordova-plugins/commits/master/bin/cordova-plugins.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/cdibened/cordova-plugins?branch=master&amp;filepath=bin%2Fcordova-plugins.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/cdibened/cordova-plugins/edit/master/bin/cordova-plugins.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/cdibened/cordova-plugins/delete/master/bin/cordova-plugins.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="err">#</span><span class="o">!</span><span class="err">/usr/bin/env node</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">    <span class="s1">&#39;use strict&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">    <span class="kd">var</span> <span class="nx">clc</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;cli-color&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">        <span class="nx">exit</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;exit&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">        <span class="nx">fs</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;fs&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">        <span class="nx">nopt</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;nopt&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">        <span class="nx">path</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;path&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">        <span class="c1">// prompt = require( &#39;prompt&#39; ),</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">        <span class="nx">updateNotifier</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;update-notifier&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">        <span class="nx">knownOpts</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">            <span class="s1">&#39;platforms&#39;</span><span class="o">:</span> <span class="nb">String</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">            <span class="s1">&#39;repo&#39;</span><span class="o">:</span> <span class="nb">String</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">        <span class="nx">shortHands</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">            <span class="s1">&#39;p&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;--platforms&#39;</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">            <span class="s1">&#39;r&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;--repo&#39;</span><span class="p">]</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">        <span class="nx">parsed</span> <span class="o">=</span> <span class="nx">nopt</span><span class="p">(</span><span class="nx">knownOpts</span><span class="p">,</span> <span class="nx">shortHands</span><span class="p">,</span> <span class="nx">process</span><span class="p">.</span><span class="nx">argv</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">        <span class="nx">plugreg</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;../scripts/plugreg-com&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">        <span class="nx">registrycordova</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;../scripts/registry-cordova-io&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">        <span class="nx">args</span> <span class="o">=</span> <span class="nx">process</span><span class="p">.</span><span class="nx">argv</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">args</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;--no-update-notifier&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">        <span class="c1">// Checks for available update and returns an instance</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">notifier</span> <span class="o">=</span> <span class="nx">updateNotifier</span><span class="p">(</span> <span class="p">{</span> <span class="nx">packagePath</span><span class="o">:</span> <span class="s1">&#39;../package.json&#39;</span><span class="p">,</span> <span class="nx">updateCheckInterval</span><span class="o">:</span> <span class="mi">1000</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">24</span> <span class="p">}</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">notifier</span><span class="p">.</span><span class="nx">update</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">            <span class="c1">// Notify using the built-in convenience method</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">            <span class="nx">notifier</span><span class="p">.</span><span class="nx">notify</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">args</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;cordova-plugins [options] command [term]&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;   commands:&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;       list       - display all available plugins&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;       search     - search plugins for a specfic term/phrase &#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;   options:&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;       -p         - comma delimited (no spaces) platforms to filter by.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;                    Valid platforms are: &#39;</span> <span class="o">+</span> <span class="nx">clc</span><span class="p">.</span><span class="nx">redBright</span><span class="p">(</span> <span class="s1">&#39;ios android blackberry10 wp7 wp8 firefoxos&#39;</span> <span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;                    Default is all.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;       -r         - the url/name of the repo to use.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;                    Valid urls are: &#39;</span><span class="o">+</span> <span class="nx">clc</span><span class="p">.</span><span class="nx">yellowBright</span><span class="p">(</span> <span class="s1">&#39;http://plugreg.com&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; or use shortform &#39;</span> <span class="o">+</span> <span class="nx">clc</span><span class="p">.</span><span class="nx">yellowBright</span><span class="p">(</span> <span class="s1">&#39;plugreg&#39;</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;                    and &#39;</span> <span class="o">+</span> <span class="nx">clc</span><span class="p">.</span><span class="nx">yellowBright</span><span class="p">(</span><span class="s1">&#39;http://registry.cordova.io&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; or use shortform &#39;</span> <span class="o">+</span> <span class="nx">clc</span><span class="p">.</span><span class="nx">yellowBright</span><span class="p">(</span> <span class="s1">&#39;cordova&#39;</span> <span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;                    Default is http://registry-cordova-io.cordova.io&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;   term           - term to use when using the `search` command.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;                    Wrap the term in quotes if there are spaces.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;\nexample: cordova-plugins -p ios,android list&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">    <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">platforms</span> <span class="o">=</span> <span class="p">(</span><span class="nx">parsed</span><span class="p">.</span><span class="nx">platforms</span> <span class="o">?</span> <span class="nx">parsed</span><span class="p">.</span><span class="nx">platforms</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="p">[]),</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">            <span class="nx">repo</span> <span class="o">=</span> <span class="nx">parsed</span><span class="p">.</span><span class="nx">repo</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">            <span class="nx">command</span> <span class="o">=</span> <span class="nx">parsed</span><span class="p">.</span><span class="nx">argv</span><span class="p">.</span><span class="nx">remain</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="s1">&#39;list&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">            <span class="nx">plugin</span> <span class="o">=</span> <span class="nx">parsed</span><span class="p">.</span><span class="nx">argv</span><span class="p">.</span><span class="nx">remain</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">            <span class="nx">userconfig</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">            <span class="c1">// userconfig = require(process.env[(process.platform === &#39;win32&#39;) ? &#39;USERPROFILE&#39; : &#39;HOME&#39;]+&#39;/.cordova-plugins&#39;);</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">        <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">            <span class="nx">userconfig</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">fs</span><span class="p">.</span><span class="nx">readFileSync</span><span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">[(</span><span class="nx">process</span><span class="p">.</span><span class="nx">platform</span> <span class="o">===</span> <span class="s1">&#39;win32&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;USERPROFILE&#39;</span> <span class="o">:</span> <span class="s1">&#39;HOME&#39;</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;/.cordova-plugins&#39;</span><span class="p">,</span> <span class="s1">&#39;utf8&#39;</span> <span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">            <span class="nx">repo</span> <span class="o">=</span> <span class="nx">repo</span> <span class="o">||</span> <span class="p">(</span><span class="nx">userconfig</span> <span class="o">&amp;&amp;</span> <span class="nx">userconfig</span><span class="p">.</span><span class="nx">repo</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">        <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span> <span class="s1">&#39;Cannot find or parse config file.  Please make sure it exists and is valid json. Using Defaults.\n&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">        <span class="k">switch</span> <span class="p">(</span><span class="nx">command</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">())</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">        <span class="k">case</span> <span class="s1">&#39;list&#39;</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">        <span class="k">case</span> <span class="s1">&#39;search&#39;</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">            <span class="k">if</span><span class="p">(</span> <span class="nx">repo</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">repo</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">indexOf</span><span class="p">(</span> <span class="s1">&#39;plugreg&#39;</span> <span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">                <span class="nx">plugreg</span><span class="p">.</span><span class="nx">fetch</span><span class="p">(</span><span class="nx">plugin</span><span class="p">,</span><span class="nx">platforms</span><span class="p">,</span><span class="nx">userconfig</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">            <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">                <span class="nx">registrycordova</span><span class="p">.</span><span class="nx">fetch</span><span class="p">(</span><span class="nx">plugin</span><span class="p">,</span><span class="nx">platforms</span><span class="p">,</span><span class="nx">userconfig</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">            <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">        <span class="c1">// case &#39;get&#39;:</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">            <span class="c1">// break;</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">        <span class="k">default</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line"><span class="p">})();</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05145s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-0c1b00f7935ae85624f5fc5d40d52d60febf92b4.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-1ca12566b241b645d3e1d487df11bf37293061de.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

