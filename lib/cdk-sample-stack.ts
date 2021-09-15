import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class CdkSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lamdaリソースをスタックに追加
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X, // 実行環境
      code: lambda.Code.fromAsset('lambda'), // lamdaディレクトリのコードを読み込む
      handler: 'hello.handler' // "hello"ファイルの"handler"関数を実行する
    });
  }
}

