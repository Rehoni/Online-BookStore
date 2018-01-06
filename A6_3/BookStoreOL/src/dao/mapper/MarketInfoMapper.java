package dao.mapper;

import java.util.List;

import dao.model.MarketInfo;
import dao.model.MarketInfoExample;
import dao.model.MarketInfoKey;
import org.apache.ibatis.annotations.Param;

public interface MarketInfoMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int countByExample(MarketInfoExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int deleteByExample(MarketInfoExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int deleteByPrimaryKey(MarketInfoKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int insert(MarketInfo record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int insertSelective(MarketInfo record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    List<MarketInfo> selectByExample(MarketInfoExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    MarketInfo selectByPrimaryKey(MarketInfoKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int updateByExampleSelective(@Param("record") MarketInfo record, @Param("example") MarketInfoExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int updateByExample(@Param("record") MarketInfo record, @Param("example") MarketInfoExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int updateByPrimaryKeySelective(MarketInfo record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table marketinfo_
     *
     * @mbggenerated Fri Dec 29 19:52:50 CST 2017
     */
    int updateByPrimaryKey(MarketInfo record);
}