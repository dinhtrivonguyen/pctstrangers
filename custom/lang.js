
// LƯU Ý: MỖI LẦN CHỈNH SỬA FILE NÀY, BẠN CẦN CHẠY DEPLOY.BAT ĐỂ UPDATE LÊN SERVER

module.exports = {
	BAO_TRI : "Hệ thống hiện đang bảo trì. Chúng tớ sẽ sớm kết nối lại và thông báo cho các bạn.",
	FIRST_COME : 'Bạn đã sẵn sàng tìm người ấy để đi xem Concert MAQUILLER từ Trouvaille chưa?! Nhập ký tự bất kỳ để bắt đầu!',
	HUONG_DAN : "🤗 Nhập từ khóa batdau hoặc lựa chọn giới tính trong menu để bắt đầu tìm kiếm người ấy cho mình nhé.",
	BATDAU_OKAY : "\nChúng tớ đang tìm người phù hợp với bạn nhất...",
	BATDAU_WARN_GENDER : "Thông báo: Bạn không chọn giới tính. Chúng tớ sẽ ghép cặp ngẫu nhiên cho bạn. ",
	BATDAU_ERR_ALREADY : "Hãy chắc chắn trước khi ketthuc và gõ batdau để tìm người mới nhé <3",
	WAITING : "\nChúng tớ đang tìm người phù hợp với bạn nhất",
	START_CHAT : "💞 Bạn đã được kết nối với một bạn cùng trường! Gõ ketthuc để kết thúc cuộc trò chuyện nhé. Chúc hai bạn trò chuyện vui vẻ  :)",
	END_CHAT : "\nGửi batdau để ghép cặp với người mới nhé!",
	END_CHAT_FORCE : "Hiện tại chúng tớ không tìm được ai cả. Bạn hãy thử lại nha :<",
	ERR_UNKNOWN : "Hệ thống xảy ra lỗi nhưng ko nghiêm trọng lắm\nHãy gửi ketthuc để thoát ra và thử lại",
	ERR_ATTACHMENT : "Lỗi: chúng mình chưa hỗ trợ gửi dạng dữ liệu này",
	ATTACHMENT_FILE : " Bạn ý đã gửi 1 tệp tin: ",
	ATTACHMENT_LINK : " Bạn ý đã gửi 1 đường link: ",
	ERR_FAKE_MSG : " Lỗi: Bạn không được giả mạo tin nhắn của bot",
	SQL_ERR : " Lỗi: Không thể kết nối với database. Hãy báo cho admin!",
	GENDER_ERR : " Lỗi: Giới tính nhập vào không hợp lệ!",
	GENDER_WRITE_OK : " 🎉 Chúng tớ sẽ tìm người ấy theo lựa chọn của bạn là: ",
	GENDER_WRITE_WARN : "\n\nLưu ý: Lựa chọn này chỉ có tác dụng với phần lớn các cuộc nói chuyện.",
	GENDER_ARR : ['không quan tâm', 'nam', 'nữ'],
	HELP_TXT : " 📩 Hướng dẫn sử dụng các câu lệnh để tìm đối phương:\n" +
				"- batdau: Bắt đầu tìm kiếm \n"+
				"- ketthuc: Kết thúc cuộc trò chuyện\n"+
				"- trogiup: Xem hướng dẫn\n"+
				"\nCác câu lệnh có thể dùng khi đang không kết nối với ai:\n"+
				"- tim nu: Tìm con gái\n"+
				"- tim nam: Tìm bạn trai \n"+
				"\nCác cú pháp tin nhắn của chức năng mới:\n"+
				" =Random [lựa chọn 1], [lựa chọn 2]: Bot lựa chọn ngẫu nhiên giúp bạn \n"+
				"Ví dụ: =Random xin facebook đối phương, cân nhắc sau\n"+
				"gauw: Xem ảnh chó ngẫu nhiên \n"+
				"meow: Xem ảnh mèo ngẫu nhiên \n"+
				"\n Phan Chau Trinh Strangers ver02\n"+
				"\n Sự phát triển hệ thống thuộc về Studnet Gen4.1",
				
	BROADCAST_TXT : "this is a message from admin",			

	BROADCAST_HTTT: "️🎶 CƠ HỘI CUỐI ĐĂNG KÝ VÉ CONCERT “MAQUILLER” | ĐỢT CHÍNH THỨC ️🎶 \n" +
					"Mua vé tại: http://bit.ly/TRVOfficialTicket \n" +
					"Giá vé: 120.000 đồng (đã bao gồm nước) \n" +
					"Thời gian: 19h15 ngày 29/11/2020 \n" + 
					"Địa điểm: Khách sạn Mường Thanh Luxury, 270 Võ Nguyên Giáp, Đà Nẵng \n",

	KEYWORD_BATDAU : 'batdau',
	KEYWORD_KETTHUC : 'ketthuc',
	KEYWORD_GENDER : 'tim',
	KEYWORD_HELP : 'trogiup',
	KEYWORD_TIEUCHI : 'tieuchi',
	KEYWORD_BROADCAST : 'broadcastmsg',
	KEYWORD_CAT : 'meow',
	KEYWORD_DOG : 'gauw',

	ERR_200: '[Chatbot] Bạn chat không thể nhận tin nhắn do đã xóa inbox hoặc block page.',
	ERR_10: '[Chatbot] Bạn chat không thể nhận tin nhắn do 2 bạn không nói chuyện gì trong vòng 24h. Gửi ketthuc để kết thúc chat.',
	ERR_TOO_LONG: '[Chatbot] Lỗi: tin nhắn quá dài (nhiều hơn 640 ký tự). Hãy chia nhỏ tin nhắn và gửi dần.'
};
