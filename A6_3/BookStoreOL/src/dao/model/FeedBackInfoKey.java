package dao.model;

public class FeedBackInfoKey {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column feedbackinfo_.feedbackID
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    private Integer feedbackid;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column feedbackinfo_.userID
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    private Integer userid;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column feedbackinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    private String isbn;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column feedbackinfo_.feedbackID
     *
     * @return the value of feedbackinfo_.feedbackID
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    public Integer getFeedbackid() {
        return feedbackid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column feedbackinfo_.feedbackID
     *
     * @param feedbackid the value for feedbackinfo_.feedbackID
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    public void setFeedbackid(Integer feedbackid) {
        this.feedbackid = feedbackid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column feedbackinfo_.userID
     *
     * @return the value of feedbackinfo_.userID
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    public Integer getUserid() {
        return userid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column feedbackinfo_.userID
     *
     * @param userid the value for feedbackinfo_.userID
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column feedbackinfo_.ISBN
     *
     * @return the value of feedbackinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    public String getIsbn() {
        return isbn;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column feedbackinfo_.ISBN
     *
     * @param isbn the value for feedbackinfo_.ISBN
     *
     * @mbggenerated Fri Dec 29 19:57:10 CST 2017
     */
    public void setIsbn(String isbn) {
        this.isbn = isbn == null ? null : isbn.trim();
    }
}