package controller;

import dao.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import service.LoginService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {
    @Autowired
    LoginService loginService;

    @RequestMapping(value = "/login.form", method = RequestMethod.POST)
    public ModelAndView UserLogin(UserInfo userInfo, HttpSession session, HttpServletResponse response) throws Exception {
        ModelAndView mav = new ModelAndView();
        UserInfo temp = loginService.Login(userInfo);
        Cookie usernameCookie = new Cookie("username", temp.getUsername());
        usernameCookie.setMaxAge(7 * 24 * 3600);
        usernameCookie.setPath("/");//设置作用域
        response.addCookie(usernameCookie);
        Cookie passwordCookie = new Cookie("password", temp.getPassword());
        passwordCookie.setMaxAge(7 * 24 * 3600);
        passwordCookie.setPath("/");//设置作用域
        response.addCookie(passwordCookie);
        session.setAttribute("User", temp);
        mav.setViewName("redirect:/toLogin.form");
        return mav;
    }

    @RequestMapping(value = "/register.form", method = RequestMethod.POST)
    public ModelAndView UserRegister(UserInfo userInfo, HttpServletResponse response) throws Exception {
        ModelAndView mav = new ModelAndView();
        return mav;
    }


}
