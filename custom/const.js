module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : '430beb25e9879389676b2188e651e016',
	FB_PAGE_VERIFY_TOKEN : 'passsword_dang_yeu_nhat_qua_dat', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAqloA1Q4EcBAAZAgT5sgiPYjIc1plAfjPVsK4chmB39ZAaUFBh7PRv69gkXv5tWG55bk8gbMn7quZBXm7zDzBLrbI2m3Qc9LYFI6bMZA1ysNV1ZAZAxo8aA4xTuOOaxXB10lsBbhu9Dq9QWJ7NSWFBkVX78EuB8Tc5m3zuZBZAIZAB63YJMlHDPE2cHczyYHbAAZD',

	//HEROKU STUFFS
	APP_NAME : '',
	HEROKU_API_KEY : '',
	KEEP_APP_ALWAYS_ON : false, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'mongodb://Neo:NeoTheThird1404%5E%5E@cluster0-shard-00-00-3y5vp.gcp.mongodb.net:27017,cluster0-shard-00-01-3y5vp.gcp.mongodb.net:27017,cluster0-shard-00-02-3y5vp.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',

	//ANALYTICS
	HAS_POST_LOG : false,
	POST_LOG_ID : '',
	POST_LOG_ENTRY1 : '',
	POST_LOG_ENTRY2 : '',

	//GOOGLE FORMS
	REPORT_LINK : "",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 7, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 60, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "@1234567890" //password để login vào trang admin
};
