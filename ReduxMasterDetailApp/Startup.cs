﻿using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;
using System.Security.Claims;

[assembly: OwinStartup(typeof(ReduxMasterDetailApp.Startup))]

namespace ReduxMasterDetailApp
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseOAuthBearerTokens(new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/Token"),
                Provider = new ApplicationOAuthProvider(),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(14),
                AllowInsecureHttp = true
            });
        }
    }

    class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
            return Task.FromResult(0);
        }

        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            if (context.UserName == "admin" && context.Password == "p@ssw0rd")
            {
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                identity.AddClaims(new[]
                {
                    new Claim(ClaimTypes.GivenName, context.UserName)
                });
                context.Validated(identity);
            }
            else
            {
                context.Rejected();
            }
            return Task.FromResult(0);
        }
    }
}
