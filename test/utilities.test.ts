import * as assert from 'assert';
import { Utilities } from '../src/utilities';

suite('Utilities Test', () => {

	test('SplitKeepDelimeterTests path with delimeter in front', () => {
		const filePathWitFileName = '/Users/Test/test.ts';

		const expectedArray = ['', '/Users', '/Test', '/test.ts'];
		const actualArray = Utilities.splitKeepDelimeter(filePathWitFileName, '/');
		assert.deepEqual(actualArray, expectedArray);
	});

	test('SplitKeepDelimeterTests path without delimeter in front', () => {
		const filePathWitFileName = 'Users/Test/test.ts';

		const expectedArray = ['/Users', '/Test', '/test.ts'];
		const actualArray = Utilities.splitKeepDelimeter(filePathWitFileName, '/');
		assert.deepEqual(actualArray, expectedArray);
	});

	test('CombineToPathWithoutFileName with filename in path', () => {
		const filePathArray = ['/Users', '/Test', '/test.ts'];

		const expectedFilePath = ['/Users/Test'];
		const actualFilePath = Utilities.combineToPathWithoutFileName(filePathArray);
		assert.equal(actualFilePath, expectedFilePath);
	});

	test('CombineToPathWithoutFileName without filename in path', () => {
		const filePathArray = ['/Users', '/Test'];

		const expectedFilePath = ['/Users/Test'];
		const actualFilePath = Utilities.combineToPathWithoutFileName(filePathArray);
		assert.equal(actualFilePath, expectedFilePath);
	});
});