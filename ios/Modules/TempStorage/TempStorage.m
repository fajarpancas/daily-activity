//
//  TempStorage.m
//  VirtualSpace
//
//  Created by Rahmat Zulfikri on 22/04/21.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(TempStorage, NSObject)
RCT_EXTERN_METHOD(init)
RCT_EXTERN_METHOD(
                  getAllData: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )
@end
