// jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from "./src/auth/jwt-payload.interface";
import { Client } from "./Models/Client";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Client.name) private userModel: Model<Client>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'skillou$JwtKey@Token13&',
    });
  }

  async validate(payload: JwtPayload) {
    const { email } = payload;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
