import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Root from '../Root';

const Home = (props)=>{
    useEffect(()=>{
        if(!localStorage.getItem('jwt')){
            props.history.push('/')
        }
    })
    return(
        <Root>
            <h3>GIỚI THIỆU</h3>
            <p>
            Phần mềm quản lý vận là giải pháp tổng thể được thiết kế và xây dựng áp dụng cho Tiểu đoàn Vận tải cấp chiến thuật. 
            Qua đó giúp cho chỉ huy đơn vị theo dõi, kiểm soát được thông tin của đơn vị một cách bao quát, toàn diện và nhanh chóng nhất.
            Phần mền giúp đơn vị có thẩm quyền quản lý quân số , thuận tiện trọng việc tra cứu tìm kiếm hồ sơ cán bộ, nhân viên chuyên môn kĩ thuật của đơn vị.
            Hệ thống phần mềm có các chức năng phân quyền đến từng đơn vị, cho phép Cán bộ tổ chức được phép cập nhật hồ sơ CBCCVC của đơn vị mình và đảm bảo tính bảo mật của hồ sơ giữa các đơn vị.
            </p>
            <h3>II. CÁC NHÓM CHỨC NĂNG CHÍNH:</h3>
        </Root>
    )
};

export default withRouter(Home)