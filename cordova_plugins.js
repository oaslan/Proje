



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>phonegap-2-style-3/cordova_plugins.js at master · phonegap/phonegap-2-style-3</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="phonegap/phonegap-2-style-3" name="twitter:title" /><meta content="phonegap-2-style-3 - PhoneGap 3.0 project that includes all of the plugins by default" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/60365?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/60365?v=2&amp;s=400" property="og:image" /><meta content="phonegap/phonegap-2-style-3" property="og:title" /><meta content="https://github.com/phonegap/phonegap-2-style-3" property="og:url" /><meta content="phonegap-2-style-3 - PhoneGap 3.0 project that includes all of the plugins by default" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="9BDFCF27:13AD:447DFF7:5417EFA7" name="octolytics-dimension-request_id" /><meta content="6433605" name="octolytics-actor-id" /><meta content="oaslan" name="octolytics-actor-login" /><meta content="75a82fe713ae9de336e1f2cc2b6027c3a1fc726a8a876013d0a8f94c8d0f2396" name="octolytics-actor-hash" />
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="ffA1cuksWiSG3IToPZy1be6bxJxj6WtpNdAbEs0T2K4OTwWW1zuk7m3QVKVT6zk4wqE8SGNyTWoo8jbVSRjNHQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-dffb79fb82f52982b30244965c2578205ec70b2f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-a2cc0de113caf4b0ae498b06378dc6e817147d77.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="53cbbcddc26423ce802605f0d031c02e">

      
  <meta name="description" content="phonegap-2-style-3 - PhoneGap 3.0 project that includes all of the plugins by default">
  <meta name="go-import" content="github.com/phonegap/phonegap-2-style-3 git https://github.com/phonegap/phonegap-2-style-3.git">

  <meta content="60365" name="octolytics-dimension-user_id" /><meta content="phonegap" name="octolytics-dimension-user_login" /><meta content="11325061" name="octolytics-dimension-repository_id" /><meta content="phonegap/phonegap-2-style-3" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11325061" name="octolytics-dimension-repository_network_root_id" /><meta content="phonegap/phonegap-2-style-3" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/phonegap/phonegap-2-style-3/commits/master.atom" rel="alternate" title="Recent Commits to phonegap-2-style-3:master" type="application/atom+xml">

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
          <form accept-charset="UTF-8" action="/phonegap/phonegap-2-style-3/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/phonegap/phonegap-2-style-3/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
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
      <span title="phonegap/phonegap-2-style-3">This repository</span>
    </li>
      <li>
        <a href="/phonegap/phonegap-2-style-3/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
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
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lgK1TFZ0LPfhFTPL7bBBs38uZtl15WCyjiP7HdlDWd4QGRqXL/X4orbtKt7+5uPB9ay0JekY/SUDWGEbd4kudg==" /></div>
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
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3PTAnTBI1TkGTdm8+yHdghyDsRs0JB7u7yueLrTw/EeTuf5jzayhUCkjk9Qm8ZAjgKIbrwO1wxnS+0UuaA5bpA==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="11325061" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/phonegap/phonegap-2-style-3/watchers">
        22
      </a>
      <a href="/phonegap/phonegap-2-style-3/subscription"
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

    <form accept-charset="UTF-8" action="/phonegap/phonegap-2-style-3/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="2/4WdH2qvpS/P8/YNaaRfyZKOcWrvbzQQkiDtP0y2Q5Vl8QLb42oRa5xacWbhVXphzmQ4E5oniXhUJF9q5pkBA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar phonegap/phonegap-2-style-3">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/phonegap/phonegap-2-style-3/stargazers">
          38
        </a>
</form>
    <form accept-charset="UTF-8" action="/phonegap/phonegap-2-style-3/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sy2sKEXvaqttvna7NinH+0zOgLd0w3wxKjBQ6HKhRbzC0n3kTSe+hisX/ZbKrtQL2uLZSsX6LWxQHd5wEngOnw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star phonegap/phonegap-2-style-3">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/phonegap/phonegap-2-style-3/stargazers">
          38
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/phonegap/phonegap-2-style-3/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of phonegap/phonegap-2-style-3 to your account" aria-label="Fork your own copy of phonegap/phonegap-2-style-3 to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/phonegap/phonegap-2-style-3/network" class="social-count">61</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/phonegap" class="url fn" itemprop="url" rel="author"><span itemprop="title">phonegap</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/phonegap/phonegap-2-style-3" class="js-current-repository js-repo-home-link">phonegap-2-style-3</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/phonegap/phonegap-2-style-3/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/phonegap/phonegap-2-style-3" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /phonegap/phonegap-2-style-3">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/phonegap/phonegap-2-style-3/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /phonegap/phonegap-2-style-3/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/phonegap/phonegap-2-style-3/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /phonegap/phonegap-2-style-3/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/phonegap/phonegap-2-style-3/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /phonegap/phonegap-2-style-3/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/phonegap/phonegap-2-style-3/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /phonegap/phonegap-2-style-3/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/phonegap/phonegap-2-style-3/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /phonegap/phonegap-2-style-3/graphs">
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
           value="https://github.com/phonegap/phonegap-2-style-3.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/phonegap/phonegap-2-style-3.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:phonegap/phonegap-2-style-3.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:phonegap/phonegap-2-style-3.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/phonegap/phonegap-2-style-3" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/phonegap/phonegap-2-style-3" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
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


  <a href="github-windows://openRepo/https://github.com/phonegap/phonegap-2-style-3" class="minibutton sidebar-button" title="Save phonegap/phonegap-2-style-3 to your computer and use it in GitHub Desktop." aria-label="Save phonegap/phonegap-2-style-3 to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/phonegap/phonegap-2-style-3/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of phonegap/phonegap-2-style-3 as a zip file"
                   title="Download the contents of phonegap/phonegap-2-style-3 as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/phonegap/phonegap-2-style-3/blob/8d2063dc4e57fce221d3784bf5c9f3a411343699/platforms/android/assets/www/cordova_plugins.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:8bc43f0cd3d161c7b970181633935938 -->

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
              <a href="/phonegap/phonegap-2-style-3/blob/master/platforms/android/assets/www/cordova_plugins.js"
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
    <a href="/phonegap/phonegap-2-style-3/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="platforms/android/assets/www/cordova_plugins.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">phonegap-2-style-3</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3/tree/master/platforms" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">platforms</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3/tree/master/platforms/android" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">android</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3/tree/master/platforms/android/assets" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">assets</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3/tree/master/platforms/android/assets/www" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator"> / </span><strong class="final-path">cordova_plugins.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Steve Gill" class="avatar" data-user="169536" height="24" src="https://avatars3.githubusercontent.com/u/169536?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/stevengill" rel="contributor">stevengill</a></span>
        <time datetime="2013-07-10T17:06:48-07:00" is="relative-time">July 10, 2013</time>
        <div class="commit-title">
            <a href="/phonegap/phonegap-2-style-3/commit/c372f70a93c7fc4f98bd813c1b00504d4bb59f90" class="message" data-pjax="true" title="added ios and android project with all plugins installed">added ios and android project with all plugins installed</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Steve Gill" data-user="169536" height="24" src="https://avatars3.githubusercontent.com/u/169536?v=2&amp;s=48" width="24" />
            <a href="/stevengill">stevengill</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>3 lines (3 sloc)</span>
          <span class="meta-divider"></span>
        <span>9.755 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/phonegap/phonegap-2-style-3/raw/master/platforms/android/assets/www/cordova_plugins.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/phonegap/phonegap-2-style-3/blame/master/platforms/android/assets/www/cordova_plugins.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/phonegap/phonegap-2-style-3/commits/master/platforms/android/assets/www/cordova_plugins.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/phonegap/phonegap-2-style-3?branch=master&amp;filepath=platforms%2Fandroid%2Fassets%2Fwww%2Fcordova_plugins.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/phonegap/phonegap-2-style-3/edit/master/platforms/android/assets/www/cordova_plugins.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/phonegap/phonegap-2-style-3/delete/master/platforms/android/assets/www/cordova_plugins.js"
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
        <td id="LC1" class="blob-code js-file-line"><span class="nx">cordova</span><span class="p">.</span><span class="nx">define</span><span class="p">(</span><span class="s1">&#39;cordova/plugin_list&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">[{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.AudioHandler/www/MediaError.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.AudioHandler.MediaError&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.MediaError&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.AudioHandler/www/Media.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.AudioHandler.Media&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.Media&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.battery-status/www/battery.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.battery-status.battery&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.battery&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.camera/www/CameraConstants.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.camera.Camera&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Camera&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.camera/www/CameraPopoverOptions.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.camera.CameraPopoverOptions&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;CameraPopoverOptions&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.camera/www/Camera.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.camera.camera&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.camera&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.camera/www/CameraPopoverHandle.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.camera.CameraPopoverHandle&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;CameraPopoverHandle&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.contacts/www/contacts.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.contacts.contacts&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.contacts&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.contacts/www/Contact.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.contacts.Contact&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Contact&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.contacts/www/ContactAddress.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.contacts.ContactAddress&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;ContactAddress&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.contacts/www/ContactError.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.contacts.ContactError&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;ContactError&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.contacts/www/ContactField.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.contacts.ContactField&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;ContactField&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.contacts/www/ContactFindOptions.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.contacts.ContactFindOptions&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;ContactFindOptions&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.contacts/www/ContactName.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.contacts.ContactName&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;ContactName&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.contacts/www/ContactOrganization.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.contacts.ContactOrganization&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;ContactOrganization&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.device/www/device.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.device.device&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;device&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.device-motion/www/Acceleration.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.device-motion.Acceleration&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Acceleration&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.device-motion/www/accelerometer.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.device-motion.accelerometer&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.accelerometer&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.device-orientation/www/CompassError.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.device-orientation.CompassError&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;CompassError&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.device-orientation/www/CompassHeading.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.device-orientation.CompassHeading&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;CompassHeading&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.device-orientation/www/compass.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.device-orientation.compass&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.compass&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.dialogs/www/notification.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.dialogs.notification&quot;</span><span class="p">,</span><span class="s2">&quot;merges&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.notification&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.dialogs/www/android/notification.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.dialogs.notification_android&quot;</span><span class="p">,</span><span class="s2">&quot;merges&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.notification&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/DirectoryEntry.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.DirectoryEntry&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.DirectoryEntry&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/DirectoryReader.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.DirectoryReader&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.DirectoryReader&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/Entry.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.Entry&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.Entry&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/File.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.File&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.File&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/FileEntry.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.FileEntry&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileEntry&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/FileError.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.FileError&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileError&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/FileReader.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.FileReader&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileReader&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/FileSystem.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.FileSystem&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileSystem&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/FileUploadOptions.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.FileUploadOptions&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileUploadOptions&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/FileUploadResult.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.FileUploadResult&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileUploadResult&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/FileWriter.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.FileWriter&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileWriter&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/Flags.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.Flags&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.Flags&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/LocalFileSystem.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.LocalFileSystem&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.LocalFileSystem&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/Metadata.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.Metadata&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.Metadata&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/ProgressEvent.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.ProgressEvent&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.ProgressEvent&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/requestFileSystem.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.requestFileSystem&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.requestFileSystem&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file/www/resolveLocalFileSystemURI.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file.resolveLocalFileSystemURI&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.resolveLocalFileSystemURI&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file-transfer/www/FileTransferError.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file-transfer.FileTransferError&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileTransferError&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.file-transfer/www/FileTransfer.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.file-transfer.FileTransfer&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.FileTransfer&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.geolocation/www/Coordinates.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.geolocation.Coordinates&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Coordinates&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.geolocation/www/PositionError.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.geolocation.PositionError&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;PositionError&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.geolocation/www/Position.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.geolocation.Position&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Position&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.geolocation/www/geolocation.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.geolocation.geolocation&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.geolocation&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.globalization/www/GlobalizationError.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.globalization.GlobalizationError&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.GlobalizationError&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.globalization/www/globalization.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.globalization.globalization&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.globalization&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.inappbrowser/www/InAppBrowser.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.inappbrowser.InAppBrowser&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;window.open&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.media-capture/www/CaptureAudioOptions.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.media-capture.CaptureAudioOptions&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;CaptureAudioOptions&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.media-capture/www/CaptureImageOptions.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.media-capture.CaptureImageOptions&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;CaptureImageOptions&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.media-capture/www/CaptureVideoOptions.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.media-capture.CaptureVideoOptions&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;CaptureVideoOptions&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.media-capture/www/CaptureError.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.media-capture.CaptureError&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;CaptureError&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.media-capture/www/MediaFileData.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.media-capture.MediaFileData&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;MediaFileData&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.media-capture/www/MediaFile.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.media-capture.MediaFile&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;MediaFile&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.media-capture/www/capture.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.media-capture.capture&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.device.capture&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.network-information/www/network.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.network-information.network&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.connection&quot;</span><span class="p">,</span><span class="s2">&quot;navigator.network.connection&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.network-information/www/Connection.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.network-information.Connection&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Connection&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.splashscreen/www/splashscreen.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.splashscreen.SplashScreen&quot;</span><span class="p">,</span><span class="s2">&quot;clobbers&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.splashscreen&quot;</span><span class="p">]},{</span><span class="s2">&quot;file&quot;</span><span class="o">:</span><span class="s2">&quot;plugins/org.apache.cordova.core.vibration/www/vibration.js&quot;</span><span class="p">,</span><span class="s2">&quot;id&quot;</span><span class="o">:</span><span class="s2">&quot;org.apache.cordova.core.vibration.notification&quot;</span><span class="p">,</span><span class="s2">&quot;merges&quot;</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;navigator.notification&quot;</span><span class="p">]}]</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="p">});</span></td>
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
      <li>&copy; 2014 <span title="0.04181s from github-fe122-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-0c1b00f7935ae85624f5fc5d40d52d60febf92b4.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-0245b231edeefe0fb2ff1f901fe7b131b9a7aa19.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

