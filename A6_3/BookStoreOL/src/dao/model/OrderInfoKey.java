package dao.model;

public class OrderInfoKey {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column orderinfo_.orderID
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Integer orderid;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column orderinfo_.userID
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private Integer userid;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column orderinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    private String isbn;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column orderinfo_.orderID
     *
     * @return the value of orderinfo_.orderID
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Integer getOrderid() {
        return orderid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column orderinfo_.orderID
     *
     * @param orderid the value for orderinfo_.orderID
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column orderinfo_.userID
     *
     * @return the value of orderinfo_.userID
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public Integer getUserid() {
        return userid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column orderinfo_.userID
     *
     * @param userid the value for orderinfo_.userID
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column orderinfo_.ISBN
     *
     * @return the value of orderinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public String getIsbn() {
        return isbn;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column orderinfo_.ISBN
     *
     * @param isbn the value for orderinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    public void setIsbn(String isbn) {
        this.isbn = isbn == null ? null : isbn.trim();
    }
}