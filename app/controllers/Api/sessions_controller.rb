class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials, sorry bud"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {message: "Get outta town, Charlie Brown"}
    else
      render json: current_user.errors.full_messages
    end

  end


end
