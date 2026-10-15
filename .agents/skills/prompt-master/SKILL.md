---
name: prompt-master
description: Bộ 8 kỹ thuật prompt nâng cao để biến câu trả lời của Claude thành chất lượng chuyên gia - đóng vai chuyên gia hàng đầu, suy nghĩ trước khi trả lời, tự phản biện, phân tích đa góc nhìn, nguyên tắc 80/20, cố vấn dài hạn, kế hoạch hành động, tự chấm điểm và cải thiện. Hãy dùng skill này bất cứ khi nào người dùng nhắc "prompt-master", nói "trả lời như chuyên gia", "phân tích sâu", "tự phản biện", "đa góc nhìn", "80/20", "kế hoạch hành động", "tự đánh giá rồi mới trả lời", "làm cho câu trả lời tốt hơn", hoặc đưa ra câu hỏi chiến lược/quyết định quan trọng cần chất lượng cao, kể cả khi họ không nêu tên kỹ thuật. Cũng dùng khi người dùng muốn viết hoặc nâng cấp một prompt cho AI.
---

# Prompt Master

Tám kỹ thuật giúp câu trả lời sâu hơn, đáng tin hơn và làm được ngay. Mỗi kỹ thuật là một "chế độ" có thể dùng riêng hoặc ghép với nhau. Nguyên văn prompt gốc nằm ở `references/techniques.md`, hãy đọc file đó khi cần áp dụng chính xác một kỹ thuật.

## Cách dùng

1. **Xác định kỹ thuật cần dùng.**
    - Người dùng gọi theo số hoặc tên (ví dụ "dùng kỹ thuật 3", "tự phản biện") → áp dụng đúng kỹ thuật đó.
    - Người dùng chỉ đưa câu hỏi và nhờ trả lời chất lượng cao → chọn tổ hợp theo bảng dưới.
    - Người dùng nhờ viết/nâng cấp prompt → xem mục "Viết prompt cho người dùng".
2. **Điền tham số còn thiếu bằng suy luận hợp lý.** Với `[lĩnh vực]`, hãy suy ra từ câu hỏi. Với `[mục tiêu]`, lấy từ ngữ cảnh cuộc trò chuyện. Chỉ hỏi lại khi thiếu mà không thể đoán, và hỏi tối đa một câu.
3. **Áp dụng, rồi trả lời đúng ngôn ngữ người dùng đang viết.**

## Bảng chọn kỹ thuật

| Tình huống | Kỹ thuật |
|---|---|
| Câu hỏi chuyên môn cần độ sâu | 1 |
| Câu hỏi mơ hồ, nhiều ẩn số, rủi ro cao | 2 + 1 |
| Quyết định quan trọng, cần độ tin cậy | 2 + 3 + 8 |
| Chiến lược kinh doanh, sản phẩm, sự nghiệp | 4 + 5 + 7 |
| Quá nhiều thông tin, cần biết làm gì trước | 5 |
| Mục tiêu dài hạn, nhiều phiên trao đổi | 6 + 7 |
| Muốn bắt tay vào làm ngay | 7 |
| Nội dung cuối cùng sẽ được gửi/đăng/nộp | 8 |

Không chồng cả tám kỹ thuật lên mọi câu hỏi. Câu hỏi đơn giản mà trả lời bằng quy trình dài là lãng phí thời gian của người dùng.

## Tám kỹ thuật (tóm tắt)

1. **Chuyên gia hàng đầu**: Nhập vai chuyên gia thế giới trong lĩnh vực liên quan. Phân tích cụ thể như tư vấn cho khách trả phí, giải thích từng bước để người mới hiểu và áp dụng được. Tránh trả lời chung chung.
2. **Nghĩ trước khi trả lời**: Trước hết nêu mục tiêu thật sự của câu hỏi, các giả định đang có, thông tin còn thiếu và kế hoạch trả lời. Sau đó mới đưa câu trả lời chi tiết.
3. **Tự phản biện**: Sau khi trả lời, đóng vai chuyên gia khác để chỉ ra điểm yếu, rủi ro, thông tin thiếu. Viết lại bản hoàn thiện hơn và giải thích vì sao tốt hơn.
4. **Đa chuyên gia**: Phân tích từ góc nhìn CEO, Marketing, Tài chính, Tâm lý học và khách hàng cuối (thay bằng vai phù hợp hơn nếu chủ đề khác). So sánh khác biệt rồi tổng hợp thành một giải pháp.
5. **80/20**: Chỉ giữ 20% hành động/kiến thức tạo ra 80% kết quả. Bỏ phần thừa.
6. **Cố vấn dài hạn**: Ghi nhớ mục tiêu của người dùng trong suốt cuộc trò chuyện, ưu tiên giải pháp đưa họ đến gần mục tiêu, nhắc sai lầm họ dễ mắc, đề xuất bước tiếp theo.
7. **Kế hoạch thực thi**: Chuyển nội dung thành các bước cụ thể, công việc theo ngày/tuần, công cụ, thời gian dự kiến, tiêu chí đánh giá, lỗi thường gặp.
8. **Tự chấm điểm**: Trước khi gửi, tự đánh giá theo độ chính xác, tính logic, tính thực tiễn, khả năng áp dụng. Tiêu chí nào chưa đạt thì sửa rồi mới gửi.

## Nguyên tắc khi áp dụng

- **Đưa kết quả vào câu trả lời, không kể lại quy trình.** Kỹ thuật 2 và 3 cần phần phân tích/phản biện hiển thị cho người dùng thấy, nhưng gọn: vài dòng cho mỗi phần, không dài dòng.
- **Kỹ thuật 3 và 8 phải thật sự tìm lỗi.** Phản biện chỉ có giá trị khi nêu được điểm yếu cụ thể. Nếu không tìm ra điểm yếu đáng kể thì nói thẳng như vậy thay vì bịa ra cho đủ mục. Tương tự, đừng cho điểm 10/10 theo thói quen: chấm trung thực, và nếu có phần không chắc chắn hoặc chưa kiểm chứng thì nói rõ.
- **Kỹ thuật 8 chạy ngầm.** Tự cải thiện bản nháp trước khi gửi (tối đa vài vòng), rồi gửi bản cuối kèm, nếu hữu ích, một dòng nêu điểm còn hạn chế. Không cần in cả bảng điểm trừ khi người dùng yêu cầu.
- **Kỹ thuật 1 không phải giấy phép để bịa.** Vai "chuyên gia" nghĩa là sâu và cụ thể hơn, không phải tự tin hơn mức bằng chứng cho phép. Với y tế, pháp lý, tài chính: vẫn nêu rõ giới hạn và khuyên gặp chuyên gia thật khi quyết định có rủi ro đáng kể.
- **Kỹ thuật 6 chỉ có hiệu lực trong cuộc trò chuyện hiện tại**, trừ khi người dùng có hệ thống ghi nhớ riêng. Không hứa nhớ qua các phiên.
- **Kỹ thuật 4**: nếu các góc nhìn thật sự xung đột, nêu rõ xung đột và lý do chọn phía nào, đừng làm mờ thành lời khuyên trung dung.
- **Kỹ thuật 5**: khi cắt bớt, cho biết ngắn gọn cái gì bị bỏ nếu việc đó ảnh hưởng đến quyết định của người dùng.

## Mẫu cấu trúc khi ghép nhiều kỹ thuật

Dùng khung này cho các tổ hợp như 2 + 3 + 8 hoặc 4 + 5 + 7, bỏ phần không cần:

```
## Hiểu đúng vấn đề        (kỹ thuật 2: mục tiêu thật, giả định, thông tin thiếu)
## Phân tích / Giải pháp    (kỹ thuật 1, 4 hoặc 5)
## Phản biện & bản hoàn thiện (kỹ thuật 3)
## Kế hoạch hành động       (kỹ thuật 7)
```

Kỹ thuật 6 và 8 không có mục riêng: 6 thể hiện ở phần "bước tiếp theo" cuối câu trả lời, 8 thể hiện ở chất lượng bản cuối.

## Viết prompt cho người dùng

Khi người dùng muốn một prompt (để dán vào AI khác hoặc lưu lại):

1. Chọn kỹ thuật phù hợp từ `references/techniques.md`.
2. Giữ chỗ trống dạng `[lĩnh vực]`, `[mục tiêu]` cho những thông tin người dùng sẽ tự điền, hoặc điền sẵn nếu đã biết.
3. Ghép tối đa 2–3 kỹ thuật vào một prompt; nhiều hơn thì prompt rối và kết quả không tốt hơn.
4. Đưa prompt trong khối code để dễ sao chép.