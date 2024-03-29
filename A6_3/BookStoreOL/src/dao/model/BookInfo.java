package dao.model;

import java.util.Date;

public class BookInfo {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private String isbn;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.bookname
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private String bookname;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.author
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private String author;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.price
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Float price;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.discount
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Float discount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.remainnum
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Integer remainnum;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.soldnum
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Integer soldnum;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.discribe
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private String discribe;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.shelftime
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Date shelftime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.releasetime
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Date releasetime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.bookimage
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private String bookimage;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column bookinfo_.bookstate
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Integer bookstate;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.ISBN
     *
     * @return the value of bookinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public String getIsbn() {
        return isbn;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.ISBN
     *
     * @param isbn the value for bookinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setIsbn(String isbn) {
        this.isbn = isbn == null ? null : isbn.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.bookname
     *
     * @return the value of bookinfo_.bookname
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public String getBookname() {
        return bookname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.bookname
     *
     * @param bookname the value for bookinfo_.bookname
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setBookname(String bookname) {
        this.bookname = bookname == null ? null : bookname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.author
     *
     * @return the value of bookinfo_.author
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public String getAuthor() {
        return author;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.author
     *
     * @param author the value for bookinfo_.author
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setAuthor(String author) {
        this.author = author == null ? null : author.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.price
     *
     * @return the value of bookinfo_.price
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Float getPrice() {
        return price;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.price
     *
     * @param price the value for bookinfo_.price
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setPrice(Float price) {
        this.price = price;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.discount
     *
     * @return the value of bookinfo_.discount
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Float getDiscount() {
        return discount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.discount
     *
     * @param discount the value for bookinfo_.discount
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setDiscount(Float discount) {
        this.discount = discount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.remainnum
     *
     * @return the value of bookinfo_.remainnum
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Integer getRemainnum() {
        return remainnum;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.remainnum
     *
     * @param remainnum the value for bookinfo_.remainnum
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setRemainnum(Integer remainnum) {
        this.remainnum = remainnum;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.soldnum
     *
     * @return the value of bookinfo_.soldnum
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Integer getSoldnum() {
        return soldnum;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.soldnum
     *
     * @param soldnum the value for bookinfo_.soldnum
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setSoldnum(Integer soldnum) {
        this.soldnum = soldnum;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.discribe
     *
     * @return the value of bookinfo_.discribe
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public String getDiscribe() {
        return discribe;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.discribe
     *
     * @param discribe the value for bookinfo_.discribe
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setDiscribe(String discribe) {
        this.discribe = discribe == null ? null : discribe.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.shelftime
     *
     * @return the value of bookinfo_.shelftime
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Date getShelftime() {
        return shelftime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.shelftime
     *
     * @param shelftime the value for bookinfo_.shelftime
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setShelftime(Date shelftime) {
        this.shelftime = shelftime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.releasetime
     *
     * @return the value of bookinfo_.releasetime
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Date getReleasetime() {
        return releasetime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.releasetime
     *
     * @param releasetime the value for bookinfo_.releasetime
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setReleasetime(Date releasetime) {
        this.releasetime = releasetime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.bookimage
     *
     * @return the value of bookinfo_.bookimage
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public String getBookimage() {
        return bookimage;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.bookimage
     *
     * @param bookimage the value for bookinfo_.bookimage
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setBookimage(String bookimage) {
        this.bookimage = bookimage == null ? null : bookimage.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column bookinfo_.bookstate
     *
     * @return the value of bookinfo_.bookstate
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Integer getBookstate() {
        return bookstate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column bookinfo_.bookstate
     *
     * @param bookstate the value for bookinfo_.bookstate
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setBookstate(Integer bookstate) {
        this.bookstate = bookstate;
    }
}