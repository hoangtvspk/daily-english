import { Word, VocabularyCategory } from '../../types/common';

export const categories: VocabularyCategory[] = [
  { id: '1', title: 'Giao tiếp', icon: '💬', wordCount: 10 },
  { id: '2', title: 'Du lịch', icon: '✈️', wordCount: 10 },
  { id: '3', title: 'Công việc', icon: '💼', wordCount: 10 },
  { id: '4', title: 'Ẩm thực', icon: '🍽️', wordCount: 10 },
  { id: '5', title: 'Giải trí', icon: '🎬', wordCount: 10 },
  { id: '6', title: 'Thể thao', icon: '⚽', wordCount: 10 },
  { id: '7', title: 'Gia đình', icon: '👨‍👩‍👧‍👦', wordCount: 10 },
  { id: '8', title: 'Sức khỏe', icon: '💊', wordCount: 10 },
  { id: '9', title: 'Thời tiết', icon: '☀️', wordCount: 10 },
  { id: '10', title: 'Công nghệ', icon: '💻', wordCount: 10 },
];

export const dailyWordsData: Word[] = [
  // Giao tiếp
  { id: 'gt1', word: 'Hello', pronunciation: '/həˈləʊ/', meaning: 'Xin chào', category: '1', example: 'Hello, how are you?', exampleTranslation: 'Xin chào, bạn khỏe không?', date: '2025-05-12' },
  { id: 'gt2', word: 'Goodbye', pronunciation: '/ˌɡʊdˈbaɪ/', meaning: 'Tạm biệt', category: '1', example: 'Goodbye, see you tomorrow!', exampleTranslation: 'Tạm biệt, hẹn gặp lại ngày mai!', date: '2025-05-12' },
  { id: 'gt3', word: 'Please', pronunciation: '/pliːz/', meaning: 'Làm ơn', category: '1', example: 'Please help me.', exampleTranslation: 'Làm ơn giúp tôi.', date: '2025-05-12' },
  { id: 'gt4', word: 'Thank you', pronunciation: '/ˈθæŋk juː/', meaning: 'Cảm ơn', category: '1', example: 'Thank you very much.', exampleTranslation: 'Cảm ơn bạn rất nhiều.', date: '2025-05-12' },
  { id: 'gt5', word: 'Sorry', pronunciation: '/ˈsɒri/', meaning: 'Xin lỗi', category: '1', example: 'I am sorry for being late.', exampleTranslation: 'Tôi xin lỗi vì đến muộn.', date: '2025-05-12' },
  { id: 'gt6', word: 'Excuse me', pronunciation: '/ɪkˈskjuːz miː/', meaning: 'Xin phép', category: '1', example: 'Excuse me, where is the restroom?', exampleTranslation: 'Xin phép, nhà vệ sinh ở đâu?', date: '2025-05-12' },
  { id: 'gt7', word: 'Yes', pronunciation: '/jes/', meaning: 'Vâng', category: '1', example: 'Yes, I agree.', exampleTranslation: 'Vâng, tôi đồng ý.', date: '2025-05-12' },
  { id: 'gt8', word: 'No', pronunciation: '/nəʊ/', meaning: 'Không', category: '1', example: 'No, thank you.', exampleTranslation: 'Không, cảm ơn.', date: '2025-05-12' },
  { id: 'gt9', word: 'How are you?', pronunciation: '/haʊ ɑː juː/', meaning: 'Bạn khỏe không?', category: '1', example: 'How are you today?', exampleTranslation: 'Hôm nay bạn khỏe không?', date: '2025-05-12' },
  { id: 'gt-10', word: 'Nice to meet you', pronunciation: '/naɪs tuː miːt juː/', meaning: 'Rất vui được gặp bạn', category: '1', example: 'Nice to meet you!', exampleTranslation: 'Rất vui được gặp bạn!', date: '2025-05-12' },

  // Du lịch
  { id: 'dl1', word: 'Airport', pronunciation: '/ˈeəpɔːt/', meaning: 'Sân bay', category: '2', example: 'The airport is very busy today.', exampleTranslation: 'Sân bay hôm nay rất đông.', date: '2025-05-12' },
  { id: 'dl2', word: 'Hotel', pronunciation: '/həʊˈtel/', meaning: 'Khách sạn', category: '2', example: 'We stayed at a nice hotel.', exampleTranslation: 'Chúng tôi ở một khách sạn đẹp.', date: '2025-05-12' },
  { id: 'dl3', word: 'Passport', pronunciation: '/ˈpɑːspɔːt/', meaning: 'Hộ chiếu', category: '2', example: "Don't forget your passport.", exampleTranslation: 'Đừng quên hộ chiếu của bạn.', date: '2025-05-12' },
  { id: 'dl4', word: 'Ticket', pronunciation: '/ˈtɪkɪt/', meaning: 'Vé', category: '2', example: 'I bought a ticket to Paris.', exampleTranslation: 'Tôi đã mua vé đi Paris.', date: '2025-05-12' },
  { id: 'dl5', word: 'Luggage', pronunciation: '/ˈlʌɡɪdʒ/', meaning: 'Hành lý', category: '2', example: 'My luggage is heavy.', exampleTranslation: 'Hành lý của tôi nặng.', date: '2025-05-12' },
  { id: 'dl6', word: 'Map', pronunciation: '/mæp/', meaning: 'Bản đồ', category: '2', example: 'Can I have a map?', exampleTranslation: 'Tôi có thể lấy bản đồ không?', date: '2025-05-12' },
  { id: 'dl7', word: 'Tourist', pronunciation: '/ˈtʊərɪst/', meaning: 'Khách du lịch', category: '2', example: 'There are many tourists here.', exampleTranslation: 'Có nhiều khách du lịch ở đây.', date: '2025-05-12' },
  { id: 'dl8', word: 'Guide', pronunciation: '/ɡaɪd/', meaning: 'Hướng dẫn viên', category: '2', example: 'The guide is very helpful.', exampleTranslation: 'Hướng dẫn viên rất hữu ích.', date: '2025-05-12' },
  { id: 'dl9', word: 'Beach', pronunciation: '/biːtʃ/', meaning: 'Bãi biển', category: '2', example: 'The beach is beautiful.', exampleTranslation: 'Bãi biển rất đẹp.', date: '2025-05-12' },
  { id: 'dl10', word: 'Souvenir', pronunciation: '/ˌsuːvəˈnɪər/', meaning: 'Quà lưu niệm', category: '2', example: 'I bought a souvenir.', exampleTranslation: 'Tôi đã mua một món quà lưu niệm.', date: '2025-05-12' },

  // Công việc
  { id: 'cv1', word: 'Meeting', pronunciation: '/ˈmiːtɪŋ/', meaning: 'Cuộc họp', category: '3', example: 'I have a meeting at 10 AM.', exampleTranslation: 'Tôi có một cuộc họp lúc 10 giờ sáng.', date: '2025-05-12' },
  { id: 'cv2', word: 'Deadline', pronunciation: '/ˈdedlaɪn/', meaning: 'Hạn chót', category: '3', example: 'The deadline is next week.', exampleTranslation: 'Hạn chót là tuần sau.', date: 'cv025-05-12' },
  { id: 'cv3', word: 'Project', pronunciation: '/ˈprɒdʒekt/', meaning: 'Dự án', category: '3', example: 'This project is important.', exampleTranslation: 'Dự án này quan trọng.', date: 'cv025-05-12' },
  { id: 'cv4', word: 'Colleague', pronunciation: '/ˈkɒliːɡ/', meaning: 'Đồng nghiệp', category: '3', example: 'My colleagues are friendly.', exampleTranslation: 'Đồng nghiệp của tôi rất thân thiện.', date: 'cv025-05-12' },
  { id: 'cv5', word: 'Salary', pronunciation: '/ˈsæləri/', meaning: 'Lương', category: '3', example: 'He gets a good salary.', exampleTranslation: 'Anh ấy nhận lương cao.', date: 'cv025-05-12' },
  { id: 'cv6', word: 'Promotion', pronunciation: '/prəˈməʊʃn/', meaning: 'Thăng chức', category: '3', example: 'She got a promotion.', exampleTranslation: 'Cô ấy được thăng chức.', date: 'cv025-05-12' },
  { id: 'cv7', word: 'Report', pronunciation: '/rɪˈpɔːt/', meaning: 'Báo cáo', category: '3', example: 'I finished the report.', exampleTranslation: 'Tôi đã hoàn thành báo cáo.', date: 'cv025-05-12' },
  { id: 'cv8', word: 'Boss', pronunciation: '/bɒs/', meaning: 'Sếp', category: '3', example: 'My boss is strict.', exampleTranslation: 'Sếp của tôi rất nghiêm khắc.', date: 'cv025-05-12' },
  { id: 'cv9', word: 'Task', pronunciation: '/tɑːsk/', meaning: 'Nhiệm vụ', category: '3', example: 'This task is easy.', exampleTranslation: 'Nhiệm vụ này dễ.', date: '2025-05-12' },
  { id: 'cv10', word: 'Office', pronunciation: '/ˈɒfɪs/', meaning: 'Văn phòng', category: '3', example: 'I work in an office.', exampleTranslation: 'Tôi làm việc ở văn phòng.', date: '2025-05-12' },

  // Ẩm thực
  { id: 'amthuc1', word: 'Restaurant', pronunciation: '/ˈrestərɒnt/', meaning: 'Nhà hàng', category: '4', example: 'This restaurant serves Italian food.', exampleTranslation: 'Nhà hàng này phục vụ món Ý.', date: '2025-05-12' },
  { id: 'amthuc2', word: 'Delicious', pronunciation: '/dɪˈlɪʃəs/', meaning: 'Ngon', category: '4', example: 'The food is delicious.', exampleTranslation: 'Món ăn rất ngon.', date: '2025-05-12' },
  { id: 'amthuc3', word: 'Menu', pronunciation: '/ˈmenjuː/', meaning: 'Thực đơn', category: '4', example: 'Can I see the menu?', exampleTranslation: 'Tôi có thể xem thực đơn không?', date: '2025-05-12' },
  { id: 'amthuc4', word: 'Hello', pronunciation: '/həˈləʊ/', meaning: 'Xin chào', category: '4', example: 'Hello, how are you?', exampleTranslation: 'Xin chào, bạn khỏe không?', date: '2025-05-12' },
  { id: 'amthuc5', word: 'Goodbye', pronunciation: '/ˌɡʊdˈbaɪ/', meaning: 'Tạm biệt', category: '4', example: 'Goodbye, see you tomorrow!', exampleTranslation: 'Tạm biệt, hẹn gặp lại ngày mai!', date: '2025-05-12' },
  { id: 'amthuc6', word: 'Please', pronunciation: '/pliːz/', meaning: 'Làm ơn', category: '4', example: 'Please help me.', exampleTranslation: 'Làm ơn giúp tôi.', date: '2025-05-12' },
  { id: 'amthuc7', word: 'Thank you', pronunciation: '/ˈθæŋk juː/', meaning: 'Cảm ơn', category: '4', example: 'Thank you very much.', exampleTranslation: 'Cảm ơn bạn rất nhiều.', date: '2025-05-12' },
  { id: 'amthuc8', word: 'Sorry', pronunciation: '/ˈsɒri/', meaning: 'Xin lỗi', category: '4', example: 'I am sorry for being late.', exampleTranslation: 'Tôi xin lỗi vì đến muộn.', date: '2025-05-12' },
  { id: 'amthuc9', word: 'Excuse me', pronunciation: '/ɪkˈskjuːz miː/', meaning: 'Xin phép', category: '4', example: 'Excuse me, where is the restroom?', exampleTranslation: 'Xin phép, nhà vệ sinh ở đâu?', date: '2025-05-12' },
  { id: 'amthuc10', word: 'Yes', pronunciation: '/jes/', meaning: 'Vâng', category: '4', example: 'Yes, I agree.', exampleTranslation: 'Vâng, tôi đồng ý.', date: '2025-05-12' },


  // Giải trí
  { id: 'gtri1', word: 'Movie', pronunciation: '/ˈmuːvi/', meaning: 'Bộ phim', category: '5', example: "Let's watch a movie tonight.", exampleTranslation: "Tối nay xem phim nhé.", date: '2025-05-12' },
  { id: 'gtri2', word: 'Music', pronunciation: '/ˈmjuːzɪk/', meaning: 'Âm nhạc', category: '5', example: 'She loves listening to music.', exampleTranslation: 'Cô ấy thích nghe nhạc.', date: '2025-05-12' },
  { id: 'gtri3', word: 'Game', pronunciation: '/ɡeɪm/', meaning: 'Trò chơi', category: '5', example: "Let's play a game.", exampleTranslation: 'Chơi trò chơi nhé.', date: '2025-05-12' },
  { id: 'gtri4', word: 'Dance', pronunciation: '/dæns/', meaning: 'Nhảy', category: '5', example: 'They dance very well.', exampleTranslation: 'Họ nhảy rất giỏi.', date: '2025-05-12' },
  { id: 'gtri5', word: 'Singer', pronunciation: '/ˈsɪŋər/', meaning: 'Ca sĩ', category: '5', example: 'He is a famous singer.', exampleTranslation: 'Anh ấy là ca sĩ nổi tiếng.', date: '2025-05-12' },
  { id: 'gtri6', word: 'Actor', pronunciation: '/ˈæktər/', meaning: 'Diễn viên nam', category: '5', example: 'The actor won an award.', exampleTranslation: 'Nam diễn viên đã giành giải thưởng.', date: '2025-05-12' },
  { id: 'gtri7', word: 'Actress', pronunciation: '/ˈæktrəs/', meaning: 'Diễn viên nữ', category: '5', example: 'She is a talented actress.', exampleTranslation: 'Cô ấy là nữ diễn viên tài năng.', date: '2025-05-12' },
  { id: 'gtri8', word: 'Concert', pronunciation: '/ˈkɒnsɜːt/', meaning: 'Buổi hòa nhạc', category: '5', example: 'We went to a concert.', exampleTranslation: 'Chúng tôi đã đi xem hòa nhạc.', date: '2025-05-12' },
  { id: 'gtri9', word: 'Show', pronunciation: '/ʃəʊ/', meaning: 'Chương trình', category: '5', example: 'The show starts at 8 PM.', exampleTranslation: 'Chương trình bắt đầu lúc 8 giờ tối.', date: '2025-05-12' },
  { id: 'gtri10', word: 'Cartoon', pronunciation: '/kɑːˈtuːn/', meaning: 'Hoạt hình', category: '5', example: 'Children love cartoons.', exampleTranslation: 'Trẻ em thích hoạt hình.', date: '2025-05-12' },

  // Thể thao
  { id: 'tt1', word: 'Football', pronunciation: '/ˈfʊtbɔːl/', meaning: 'Bóng đá', category: '6', example: 'He plays football every weekend.', exampleTranslation: 'Anh ấy chơi bóng đá mỗi cuối tuần.', date: '2025-05-12' },
  { id: 'tt2', word: 'Basketball', pronunciation: '/ˈbɑːskɪtbɔːl/', meaning: 'Bóng rổ', category: '6', example: 'Basketball is a popular sport.', exampleTranslation: 'Bóng rổ là môn 9 phổ biến.', date: '2025-05-12' },
  { id: 'tt3', word: 'Tennis', pronunciation: '/ˈtenɪs/', meaning: 'Quần vợt', category: '6', example: 'She plays tennis well.', exampleTranslation: 'Cô ấy chơi quần vợt giỏi.', date: '2025-05-12' },
  { id: 'tt4', word: 'Swim', pronunciation: '/swɪm/', meaning: 'Bơi', category: '6', example: 'I swim every morning.', exampleTranslation: 'Tôi bơi mỗi sáng.', date: '2025-05-12' },
  { id: 'tt5', word: 'Run', pronunciation: '/rʌn/', meaning: 'Chạy', category: '6', example: 'He can run fast.', exampleTranslation: 'Anh ấy chạy nhanh.', date: '2025-05-12' },
  { id: 'tt6', word: 'Coach', pronunciation: '/kəʊtʃ/', meaning: 'Huấn luyện viên', category: '6', example: 'The coach is strict.', exampleTranslation: 'Huấn luyện viên rất nghiêm khắc.', date: '2025-05-12' },
  { id: 'tt7', word: 'Team', pronunciation: '/tiːm/', meaning: 'Đội', category: '6', example: 'Our team won.', exampleTranslation: 'Đội của chúng tôi đã thắng.', date: '2025-05-12' },
  { id: 'tt8', word: 'Goal', pronunciation: '/ɡəʊl/', meaning: 'Bàn thắng', category: '6', example: 'He scored a goal.', exampleTranslation: 'Anh ấy ghi một bàn thắng.', date: '2025-05-12' },
  { id: 'tt9', word: 'Match', pronunciation: '/mætʃ/', meaning: 'Trận đấu', category: '6', example: 'The match was exciting.', exampleTranslation: 'Trận đấu rất hấp dẫn.', date: '2025-05-12' },
  { id: 'tt10', word: 'Win', pronunciation: '/wɪn/', meaning: 'Chiến thắng', category: '6', example: 'We want to win.', exampleTranslation: 'Chúng tôi muốn chiến thắng.', date: '2025-05-12' },

  // Gia đình
  { id: 'gd1', word: 'Father', pronunciation: '/ˈfɑːðər/', meaning: 'Bố', category: '7', example: 'My father is a doctor.', exampleTranslation: 'Bố tôi là bác sĩ.', date: '2025-05-12' },
  { id: 'gd2', word: 'Mother', pronunciation: '/ˈmʌðər/', meaning: 'Mẹ', category: '7', example: 'My mother cooks well.', exampleTranslation: 'Mẹ tôi nấu ăn ngon.', date: '2025-05-12' },
  { id: 'gd3', word: 'Brother', pronunciation: '/ˈbrʌðər/', meaning: 'Anh/em trai', category: '7', example: 'I have one brother.', exampleTranslation: 'Tôi có một anh/em trai.', date: '2025-05-12' },
  { id: 'gd4', word: 'Sister', pronunciation: '/ˈsɪstər/', meaning: 'Chị/em gái', category: '7', example: 'My sister is younger than me.', exampleTranslation: 'Em gái tôi nhỏ tuổi hơn tôi.', date: '2025-05-12' },
  { id: 'gd5', word: 'Grandfather', pronunciation: '/ˈɡrænˌfɑːðər/', meaning: 'Ông', category: '7', example: 'My grandfather tells stories.', exampleTranslation: 'Ông tôi kể chuyện.', date: '2025-05-12' },
  { id: 'gd6', word: 'Grandmother', pronunciation: '/ˈɡrænˌmʌðər/', meaning: 'Bà', category: '7', example: 'My grandmother is kind.', exampleTranslation: 'Bà tôi rất tốt bụng.', date: '2025-05-12' },
  { id: 'gd7', word: 'Uncle', pronunciation: '/ˈʌŋkl/', meaning: 'Chú/cậu/bác', category: '7', example: 'My uncle lives in Hanoi.', exampleTranslation: 'Chú tôi sống ở Hà Nội.', date: '2025-05-12' },
  { id: 'gd8', word: 'Aunt', pronunciation: '/ɑːnt/', meaning: 'Cô/dì/bác gái', category: '7', example: 'My aunt is a teacher.', exampleTranslation: 'Cô tôi là giáo viên.', date: '2025-05-12' },
  { id: 'gd9', word: 'Cousin', pronunciation: '/ˈkʌzn/', meaning: 'Anh/chị/em họ', category: '7', example: 'My cousin is my best friend.', exampleTranslation: 'Anh họ tôi là bạn thân nhất của tôi.', date: '2025-05-12' },
  { id: 'gd10', word: 'Family', pronunciation: '/ˈfæmɪli/', meaning: 'Gia đình', category: '7', example: 'I love my family.', exampleTranslation: 'Tôi yêu gia đình tôi.', date: '2025-05-12' },

  // Sức khỏe
  { id: 'sk1', word: 'Doctor', pronunciation: '/ˈdɒktər/', meaning: 'Bác sĩ', category: '8', example: 'The doctor is kind.', exampleTranslation: 'Bác sĩ rất tốt bụng.', date: '2025-05-12' },
  { id: 'sk2', word: 'Nurse', pronunciation: '/nɜːs/', meaning: 'Y tá', category: '8', example: 'The nurse helps patients.', exampleTranslation: 'Y tá giúp đỡ bệnh nhân.', date: '2025-05-12' },
  { id: 'sk3', word: 'Hospital', pronunciation: '/ˈhɒspɪtl/', meaning: 'Bệnh viện', category: '8', example: 'She works at a hospital.', exampleTranslation: 'Cô ấy làm việc ở bệnh viện.', date: '2025-05-12' },
  { id: 'sk4', word: 'Medicine', pronunciation: '/ˈmedɪsɪn/', meaning: 'Thuốc', category: '8', example: 'Take your medicine.', exampleTranslation: 'Uống thuốc đi.', date: '2025-05-12' },
  { id: 'sk5', word: 'Healthy', pronunciation: '/ˈhelθi/', meaning: 'Khỏe mạnh', category: '8', example: 'Eat healthy food.', exampleTranslation: 'Ăn thực phẩm lành mạnh.', date: '2025-05-12' },
  { id: 'sk6', word: 'Sick', pronunciation: '/sɪk/', meaning: 'Ốm', category: '8', example: 'He is sick today.', exampleTranslation: 'Hôm nay anh ấy bị ốm.', date: '2025-05-12' },
  { id: 'sk7', word: 'Pain', pronunciation: '/peɪn/', meaning: 'Đau', category: '8', example: 'I have a pain in my leg.', exampleTranslation: 'Tôi bị đau chân.', date: '2025-05-12' },
  { id: 'sk8', word: 'Clinic', pronunciation: '/ˈklɪnɪk/', meaning: 'Phòng khám', category: '8', example: 'The clinic is open.', exampleTranslation: 'Phòng khám đang mở cửa.', date: '2025-05-12' },
  { id: 'sk9', word: 'Vaccine', pronunciation: '/ˈvæksiːn/', meaning: 'Vắc xin', category: '8', example: 'The vaccine is important.', exampleTranslation: 'Vắc xin rất quan trọng.', date: '2025-05-12' },
  { id: 'sk10', word: 'Check-up', pronunciation: '/ˈtʃek ʌp/', meaning: 'Khám sức khỏe', category: '8', example: 'I have a check-up tomorrow.', exampleTranslation: 'Ngày mai tôi đi khám sức khỏe.', date: '2025-05-12' },

  // Thời tiết
  { id: 'thoitiet1', word: 'Sunny', pronunciation: '/ˈsʌni/', meaning: 'Nắng', category: '9', example: 'It is sunny today.', exampleTranslation: 'Hôm nay trời nắng.', date: '2025-05-12' },
  { id: 'thoitiet2', word: 'Rainy', pronunciation: '/ˈreɪni/', meaning: 'Mưa', category: '9', example: 'It is rainy in July.', exampleTranslation: 'Tháng 7 trời mưa.', date: '2025-05-12' },
  { id: 'thoitiet3', word: 'Cloudy', pronunciation: '/ˈklaʊdi/', meaning: 'Nhiều mây', category: '9', example: 'The sky is cloudy.', exampleTranslation: 'Trời nhiều mây.', date: '2025-05-12' },
  { id: 'thoitiet4', word: 'Windy', pronunciation: '/ˈwɪndi/', meaning: 'Gió', category: '9', example: 'It is windy today.', exampleTranslation: 'Hôm nay trời có gió.', date: '2025-05-12' },
  { id: 'thoitiet5', word: 'Storm', pronunciation: '/stɔːm/', meaning: 'Bão', category: '9', example: 'A storm is coming.', exampleTranslation: 'Có bão sắp đến.', date: '2025-05-12' },
  { id: 'thoitiet6', word: 'Snow', pronunciation: '/snəʊ/', meaning: 'Tuyết', category: '9', example: 'It snows in winter.', exampleTranslation: 'Mùa đông có tuyết.', date: '2025-05-12' },
  { id: 'thoitiet7', word: 'Foggy', pronunciation: '/ˈfɒɡi/', meaning: 'Sương mù', category: '9', example: 'It is foggy this morning.', exampleTranslation: 'Sáng nay có sương mù.', date: '2025-05-12' },
  { id: 'thoitiet8', word: 'Hot', pronunciation: '/hɒt/', meaning: 'Nóng', category: '9', example: 'It is hot in summer.', exampleTranslation: 'Mùa hè trời nóng.', date: '2025-05-12' },
  { id: 'thoitiet9', word: 'Cold', pronunciation: '/kəʊld/', meaning: 'Lạnh', category: '9', example: 'It is cold in December.', exampleTranslation: 'Tháng 12 trời lạnh.', date: '2025-05-12' },
  { id: 'thoitiet10', word: 'Rainbow', pronunciation: '/ˈreɪnbəʊ/', meaning: 'Cầu vồng', category: '9', example: 'I saw a rainbow.', exampleTranslation: 'Tôi đã nhìn thấy cầu vồng.', date: '2025-05-12' },

  // Công nghệ
  { id: 'cn1', word: 'Computer', pronunciation: '/kəmˈpjuːtə/', meaning: 'Máy tính', category: '10', example: 'I use a computer at work.', exampleTranslation: 'Tôi dùng máy tính ở chỗ làm.', date: '2025-05-12' },
  { id: 'cn2', word: 'Internet', pronunciation: '/ˈɪntənet/', meaning: 'Mạng Internet', category: '10', example: 'The internet is fast.', exampleTranslation: 'Mạng internet nhanh.', date: '2025-05-12' },
  { id: 'cn3', word: 'Smartphone', pronunciation: '/ˈsmɑːtfəʊn/', meaning: 'Điện thoại thông minh', category: '10', example: 'I bought a new smartphone.', exampleTranslation: 'Tôi đã mua điện thoại mới.', date: '2025-05-12' },
  { id: 'cn4', word: 'Software', pronunciation: '/ˈsɒftweə/', meaning: 'Phần mềm', category: '10', example: 'This software is useful.', exampleTranslation: 'Phần mềm này hữu ích.', date: '2025-05-12' },
  { id: 'cn5', word: 'Hardware', pronunciation: '/ˈhɑːdweə/', meaning: 'Phần cứng', category: '10', example: 'Hardware is important for computers.', exampleTranslation: 'Phần cứng quan trọng với máy tính.', date: '2025-05-12' },
  { id: 'cn6', word: 'App', pronunciation: '/æp/', meaning: 'Ứng dụng', category: '10', example: 'I downloaded a new app.', exampleTranslation: 'Tôi đã tải một ứng dụng mới.', date: '2025-05-12' },
  { id: 'cn7', word: 'Email', pronunciation: '/ˈiːmeɪl/', meaning: 'Thư điện tử', category: '10', example: 'Send me an email.', exampleTranslation: 'Gửi tôi một email.', date: '2025-05-12' },
  { id: 'cn8', word: 'Website', pronunciation: '/ˈwebsaɪt/', meaning: 'Trang web', category: '10', example: 'Visit our website.', exampleTranslation: 'Truy cập trang web của chúng tôi.', date: '2025-05-12' },
  { id: 'cn9', word: 'Password', pronunciation: '/ˈpɑːswɜːd/', meaning: 'Mật khẩu', category: '10', example: 'Keep your password safe.', exampleTranslation: 'Giữ mật khẩu an toàn.', date: '2025-05-12' },
  { id: 'cn10', word: 'Robot', pronunciation: '/ˈrəʊbɒt/', meaning: 'Rô bốt', category: '10', example: 'Robots can help people.', exampleTranslation: 'Rô bốt có thể giúp con người.', date: '2025-05-12' },
]; 