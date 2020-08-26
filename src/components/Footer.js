import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="p-5 mt-5 w-100 border-top row">
                <div className="col-3">
                    Công ty cổ phẩn một thành viên ACB
                </div>
                <div className="col d-flex flex-column">
                    <div className="mb-3">
                        <b>Trụ sở chính:</b> Số 19A Đặng Trần Côn, phường Quốc Tử Giám, quận Đống Đa, thành phố Hà Nội, Việt Nam.
                    </div>
                    <div>
                        <b>Mã số thuế:</b> 0103469019 do Sở kế hoạch và Đầu tư TP. Hà Nội
                        cấp lần đầu ngày 02/03/2009, đăng ký thay đổi lần thứ 12 ngày 11/11/2015.
                    </div>
                </div>
                <div className="col d-flex flex-column">
                    <div className="mb-3">
                        <b>Văn phòng làm việc:</b> Tầng 9, tòa nhà Kim Khí Thăng Long, số 1 Lương Yên, phường Bạch Đằng, quận Hai Bà Trưng, thành phố Hà Nội, Việt Nam.                    </div>
                    <div>
                        <b>Điện thoại:</b> (+84) 024 3978 5426 máy lẻ 126
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;