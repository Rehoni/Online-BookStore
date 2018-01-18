package service.serviceImpl;

import org.springframework.stereotype.Service;
import service.IDGeneratorService;

@Service
public class IDGeneratorServiceImpl implements IDGeneratorService{
    @Override
    public int Genetator(int flag) {
        int idHead = 0;
        if (flag ==1){
            idHead = (1+ (int) (Math.random()*10))*1000;//01-09+*********
        }else if (flag ==2){
            idHead = (10+ (int) (Math.random()*10))*1000;//10-19+*****
        }
        int idEnd = 1+(int)(Math.random()*1000);
        return idHead+idEnd;
    }
}
