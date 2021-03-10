module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : '6b102f3ff31458da4e17865fe70d81fc',
	FB_PAGE_VERIFY_TOKEN : 'passsword_dang_yeu_nhat_qua_dat', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAdfDxJ35ZA0BAOACcI4plGQFvHLebXh1kSyFdEQDEwlcZBArrypLcKaVEU6xo8XwoUZCTk9Ow1dL4ybiv6SluVWZB7IdHJATZAVQU2i5OM27MnwZACIVvjvlZBTnykksYjXKrpPwJxZBQrUdGRIaU8Xw31I5FRTWvbUyO5SFytQ5vZAoLI1DQIgQZCn7uzdoPRz4ZD',

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
	REPORT_LINK : "http://bit.ly/yourfeedbackaboutme",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 7, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 60, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "@1234567890" //password để login vào trang admin
};
