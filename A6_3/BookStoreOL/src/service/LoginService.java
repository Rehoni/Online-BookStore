package service;

import dao.model.UserInfo;

public interface LoginService {
    UserInfo Login(UserInfo userInfo);
    boolean Register(UserInfo user);
    boolean CheckUsername(String username);
    boolean CheckEmail(String mail);
    boolean CheckPhoneNumber(int phonenumber);
}
