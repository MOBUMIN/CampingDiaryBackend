import { Document } from 'mongoose';

export interface User extends Document {
	readonly name: string;
	readonly id: string;
	readonly password: string;
}
