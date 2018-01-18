package service.serviceImpl;

import dao.mapper.UserInfoMapper;
import dao.model.UserInfo;
import dao.model.UserInfoExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.IDGeneratorService;
import service.LoginService;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    UserInfoMapper userInfoMapper;
    @Autowired
    IDGeneratorService idGeneratorService;

    @Override
    public UserInfo Login(UserInfo userInfo) {
        UserInfo temp;
        UserInfoExample example = new UserInfoExample();
        temp = FindByEmail(example, userInfo.getEmail(), userInfo.getPassword());
        if (temp != null)
            return temp;
        temp = FindByPhonenumber(example, userInfo.getPhonenumber(), userInfo.getPassword());
        if (temp != null)
            return temp;
        temp = FindByUsername(example, userInfo.getUsername(), userInfo.getPassword());
        return temp;
    }

    private UserInfo FindByPhonenumber(UserInfoExample example, int phonenumber, String password) {
        example.clear();
        example.setDistinct(false);
        UserInfoExample.Criteria criteria = example.createCriteria();
        criteria.andPhonenumberEqualTo(phonenumber);
        criteria.andPasswordEqualTo(password);
        List<UserInfo> userInfos = userInfoMapper.selectByExample(example);
        if (userInfos.size() == 1)
            return userInfos.get(0);
        else
            return null;
    }

    private UserInfo FindByEmail(UserInfoExample example, String email, String password) {
        example.clear();
        example.setDistinct(false);
        UserInfoExample.Criteria criteria = example.createCriteria();
        criteria.andEmailEqualTo(email);
        criteria.andPasswordEqualTo(password);
        List<UserInfo> userInfos = userInfoMapper.selectByExample(example);
        if (userInfos.size() == 1)
            return userInfos.get(0);
        else
            return null;
    }

    private UserInfo FindByUsername(UserInfoExample example, String username, String password) {
        example.clear();
        example.setDistinct(false);
        UserInfoExample.Criteria criteria = example.createCriteria();
        criteria.andUsernameEqualTo(username);
        criteria.andPasswordEqualTo(password);
        List<UserInfo> userInfos = userInfoMapper.selectByExample(example);
        if (userInfos.size() == 1)
            return userInfos.get(0);
        else
            return null;
    }


    @Override
    public boolean Register(UserInfo user) {
        if (CanRegister(user)){
            initUser(user);
            return true;
        }
        return false;
    }

    @Override
    public boolean CheckUsername(String username) {
        List<UserInfo> users;
        UserInfoExample example = new UserInfoExample();
        UserInfoExample.Criteria criteria = example.createCriteria();
        example.setDistinct(false);
        criteria.andUsernameEqualTo(username);
        users = userInfoMapper.selectByExample(example);
        if (users.size()==0||users==null){
            return true;
        }else
            return false;
    }

    @Override
    public boolean CheckPhoneNumber(int phonenumber) {
        List<UserInfo> users;
        UserInfoExample example = new UserInfoExample();
        UserInfoExample.Criteria criteria = example.createCriteria();
        example.setDistinct(false);
        criteria.andPhonenumberEqualTo(phonenumber);
        users = userInfoMapper.selectByExample(example);
        if (users.size()==0||users==null){
            return true;
        }else
            return false;
    }

    @Override
    public boolean CheckEmail(String email) {
        List<UserInfo> users;
        UserInfoExample example = new UserInfoExample();
        UserInfoExample.Criteria criteria = example.createCriteria();
        example.setDistinct(false);
        criteria.andEmailEqualTo(email);
        users = userInfoMapper.selectByExample(example);
        if (users.size()==0||users==null){
            return true;
        }else
            return false;
    }

    private boolean CanRegister(UserInfo userInfo) {
        if (CheckEmail(userInfo.getEmail())&&
                CheckPhoneNumber(userInfo.getPhonenumber())&&
                CheckUsername(userInfo.getUsername()))
            return true;
        else
            return false;
    }


    private void initUser(UserInfo userInfo) {
        userInfo.setUserid(UserIDCreator());
        userInfoMapper.insert(userInfo);
    }

    private Integer UserIDCreator() {
        Integer randomCreator = idGeneratorService.Genetator(1);
        UserInfo userInfo;
        int userid;
        do {
            userid = randomCreator;
            userid = (userid > 0) ? userid : -userid;
            userInfo = userInfoMapper.selectByPrimaryKey(userid);
        } while (userInfo != null);
        return userid;
    }
}
