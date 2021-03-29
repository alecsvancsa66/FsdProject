import {getRepository} from "typeorm";
import * as tf from '@tensorflow/tfjs-node';
import {NextFunction, Request, Response} from "express";

import { Dessert } from "../entity/Dessert";
import {MnistData} from '../../data';


    const doPrediction = (model, data, testDataSize = 500) => {
        const IMAGE_WIDTH = 28;
        const IMAGE_HEIGHT = 28;
        const testData = data.nextTestBatch(testDataSize);
        const testxs = testData.xs.reshape([testDataSize, IMAGE_WIDTH, IMAGE_HEIGHT, 1]);
        const labels = testData.labels.argMax(-1);
        const preds = model.predict(testxs).argMax(-1);

        testxs.dispose();
        return [preds, labels];
    }
export class DessertController {

    

    private desertRepository = getRepository(Dessert);
    private classNames = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];


    async all(request: Request, response: Response, next: NextFunction) {
        return this.desertRepository.find();
    }

    async eval(request: Request, response: Response, next: NextFunction) {
        const data = new MnistData();
        await data.load();
        const model = await tf.loadLayersModel('localstorage://my-model-1');

        return doPrediction(model, data, 1);
    }
}