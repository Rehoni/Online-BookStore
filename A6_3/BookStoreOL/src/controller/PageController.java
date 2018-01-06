package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PageController {
    @RequestMapping(value = "/toSearch.form",method = RequestMethod.GET)
    public ModelAndView JumpToSearch(){
        System.out.println("search page");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("search");
        return mav;
    }
    @RequestMapping(value = "/toIndex.form",method = RequestMethod.GET)
    public ModelAndView JumpToIndex(){
        System.out.println("index page");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        return mav;
    }
    @RequestMapping(value = "/toBasket.form",method = RequestMethod.GET)
    public ModelAndView JumpToBasket(){
        System.out.println("basket page");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("basket");
        return mav;
    }
    @RequestMapping(value = "/toLogin.form",method = RequestMethod.GET)
    public ModelAndView JumpToLogin(){
        System.out.println("login page");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("login");
        return mav;
    }
    @RequestMapping(value = "/toLogout.form",method = RequestMethod.GET)
    public ModelAndView JumpToLogout(){
        System.out.println("logout page");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("logout");
        return mav;
    }
    @RequestMapping(value = "/toHelp.form",method = RequestMethod.GET)
    public ModelAndView JumpToHelp(){
        System.out.println("help page");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("help");
        return mav;
    }
    @RequestMapping(value = "/toContact.form",method = RequestMethod.GET)
    public ModelAndView JumpToContact(){
        System.out.println("contact page");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("contactus");
        return mav;
    }
    @RequestMapping(value = "/toAbout.form",method = RequestMethod.GET)
    public ModelAndView JumpToAbout(){
        System.out.println("about page");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("aboutus");
        return mav;
    }
}
