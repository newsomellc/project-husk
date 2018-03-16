/** 
 * Main app.  Sets up the app.
 */
'use strict';
const Express = require('express');
const pjoin   = require('path').join;

module.exports = () =>
{
	let app = Express();
	app.disable('x-powered-by');
	//app.set('view engine', 'pug');
	//app.set('views', pjoin(__dirname, '..', 'pages'));

	app.use('/', Express.static(pjoin(__dirname, '..', 'pages'), {redirect: false}));

	if (process.env.NODE_ENV !== 'production')
		app.use(require('morgan')('dev'));

	app.use(require('node-sass-middleware')(
	{
		src            : pjoin(__dirname, '..', 'pages'),
		indentedSyntax : true,
		sourceMap      : false,
		response       : true,
		importer       : require('sass-module-importer')(),

	}));

	app.use(require('connect-pug-static')(
	{
		src : pjoin(__dirname, '../pages'),
		dest : '../volatile',
	}));

	/** +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
	 * Error handler.
	 */ 
	app.use((err, req, res, next) =>
	{
		let code;

		let ctx = Object.create(null);
		
		if (process.env.NODE_ENV === 'production')
		{
			code        = 500;
			ctx.code    = code;
			ctx.message = 'It\'s not supposed to do that!';
			ctx.detail  = 'Sorry, looks like something went wrong.  Hang tight while we get it fixed!';
		}
		else
		{
			code        = 500;
			ctx.code    = code;
			ctx.message = err.message;
			ctx.detail  = err.detail;
			ctx.stack   = err.stack;
		}

		if (process.env.NODE_ENV === 'production')
				ctx.stack = false;

		res.status(code);
		if (req.path.match(/.*(js|css)$/))
			res.json(ctx);
		else
			res.render('error', Object.assign(req.ctx, ctx));
	});

	return app;
};
